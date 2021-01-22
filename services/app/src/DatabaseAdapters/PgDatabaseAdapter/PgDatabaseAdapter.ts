import DatabaseAdapter from "../DatabaseAdapter";
import { Pool, QueryResult, QueryResultRow } from "pg";
import fs = require("fs");
import path = require("path");

export default class PgDatabaseAdapter implements DatabaseAdapter {
    private pool: Pool;
    constructor() {
        this.pool = this.connect()
        this.install();
        // this.query('SELECT VERSION()').then((res) => console.log(res));
    }

    private connect() {
        return new Pool({
            user: process.env.DB_USER || 'app',
            host: process.env.DB_HOST || 'postgres',
            database: process.env.DB_NAME || 'postgres',
            password: process.env.DB_PASSWORD || 'postgres',
            port: parseInt(<string>process.env.DB_PORT) || 6543,
        })
    }

    // Install schema 
    public install(): boolean {
        let sql: string[] = fs.readFileSync(path.join(__dirname, 'init_db.sql'))
            .toString().split(';').filter((str: string) => str.length > 0);
        console.log(sql.length);
        sql.forEach((statement: string) => {
            this.query(statement.trim()).catch(err => console.log(err));
        })
        return true;
    }

    // Handles any clean up
    // TODO: Close any open clients in pool
    public close(): boolean {
        return true;
    }

    // Single point of entry for queries
    public async query(queryStr: string, params?: string[]): Promise<string> {
        const start: number = Date.now()
        const res: QueryResult<QueryResultRow> = await this.pool.query(queryStr, params)
        const duration: number = Date.now() - start
        console.log('executed query', { queryStr, duration, rows: res.rowCount })
        return JSON.stringify(res.rows);
    }

}