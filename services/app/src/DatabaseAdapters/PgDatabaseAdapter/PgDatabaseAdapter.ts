import DatabaseAdapter from "../DatabaseAdapter"
const { Pool } = require('pg')
export default class PgDatabaseAdapter extends DatabaseAdapter {

    constructor() {
        // TODO: won't need super with if DatabaseAdapter is an interface
        super();
        this.connect();    
        // this.install();
    }

    // Init tables? 
    public connect(): boolean {
        const pool = new Pool({
            user: process.env.DB_USER || 'app',
            host: process.env.DB_HOST|| 'postgres',
            database: process.env.DB_NAME|| 'postgres',
            password: process.env.DB_PASSWORD|| 'postgres',
            port: process.env.DB_PORT|| '6543',
        })
        pool.query('SELECT VERSION()', (err:any, res:any) => {
            console.log(err, res)
            pool.end()
        })
        return true;
    }

    // Install schema 
    public install(): boolean {
        // if tables not created, create tables
        return true;
    }

    // Handles any clean up
    public close(): boolean {
        return true;
    }

    // Single point of entry for queries
    // TODO: Consider genericizing this method <T>
    public query(str: string): string {
        return "JSON data";
    }

}