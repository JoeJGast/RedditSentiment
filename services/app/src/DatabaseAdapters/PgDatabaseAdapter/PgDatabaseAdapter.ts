import DatabaseAdapter from "../DatabaseAdapter";
import { Pool, QueryResult, QueryResultRow } from "pg";
import fs = require("fs");
import path = require("path");
import schema_config = require("./schema_config.json");

export default class PgDatabaseAdapter implements DatabaseAdapter {
  private pool: Pool;
  constructor() {
    this.pool = this.connect();
    this.install();
    // this.query('SELECT VERSION()').then((res) => console.log(res));
  }

  private connect() {
    return new Pool({
      user: process.env.DB_USER || "app",
      host: process.env.DB_HOST || "postgres",
      database: process.env.DB_NAME || "postgres",
      password: process.env.DB_PASSWORD || "postgres",
      port: parseInt(<string>process.env.DB_PORT) || 6543,
    });
  }

  // Install schema
  public async install(): Promise<boolean> {
    try {
      let sqlScripts: string[] = [];
      console.log(`Reading sql files from Schema directory`);

      // Read and append each file name from config file to scripts array
      schema_config.schema_order.forEach((file) => {
        let script = fs
          .readFileSync(path.join(__dirname, `./Schema/${file}`))
          .toString();
        sqlScripts.push(script);
      });

      // Await each query to ensure order of table creation
      for (let script of sqlScripts) {
        await this.query(script);
        console.log('+++++ table exist or was sucessfully created');
      }
    } catch (err) {
      console.log('---- Could not initialize tables')
      console.log(`postgres install ${err}`);
      return false;
    }

    return true;
  }

  // Handles any clean up
  // TODO: Close any open clients in pool
  public close(): boolean {
    return true;
  }

  // Single point of entry for queries
  public async query(queryStr: string, params?: string[]): Promise<string> {
    const start: number = Date.now();
    const res: QueryResult<QueryResultRow> = await this.pool.query(
      queryStr,
      params
    );
    const duration: number = Date.now() - start;
    console.log("executed query", { queryStr, duration, rows: res.rowCount });
    return JSON.stringify(res.rows);
  }
}
