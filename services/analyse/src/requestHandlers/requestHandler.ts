export class RequestHandler{
    configFilePath:string = "./config.json";
    config:RequestHandlerConfig;
    constructor(){
        this.config = this.getConfigFromFile(this.configFilePath);

    }
    private getConfigFromFile(configFilePath: string):RequestHandlerConfig{  
        // return {...require(configFilePath)} can't do this without an ignore comment at the class level... probably not worth it.
        const config:any = require(configFilePath);
        return <RequestHandlerConfig> {
            authentication: {
                userName: config.auth.userName,
                // TODO encode password
                encodedPassword: config.auth.password,
                secret: config.auth.secret
            }
        }
    }    
}

interface RequestHandlerConfig{
    authentication: {
        userName?: string
        encodedPassword?: string 
        secret?: string
    }
}