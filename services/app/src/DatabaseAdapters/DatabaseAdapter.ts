// TODO: switch to d.ts format for method definitions.

export default interface DatabaseAdapter{

    // Handle database connection and errors
    // connect(): any 

    // Install schema 
    install(): Promise<boolean>

    // Handles any clean up
    close(): boolean

    // Single point of entry for queries
    // TODO: Consider genericizing this method <T>
    query(queryStr: string, params: string[]): Promise<string>

}