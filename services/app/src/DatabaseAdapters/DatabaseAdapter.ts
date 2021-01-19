// TODO: switch to d.ts format for method definitions.

export default class DatabaseAdapter{

    constructor(){
        this.connect()    
    }
    // Handle database connection and errors
    public connect():boolean {
        return true;
    }

    // Install schema 
    public install():boolean {
        return true;
    }


    // Handles any clean up
    public close():boolean{
        return true;
    }

    // Single point of entry for queries
    // TODO: Consider genericizing this method <T>
    public query(str:string):string {
        return "JSON data";
    }

}