"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandler = void 0;
class RequestHandler {
    constructor() {
        this.configFilePath = "./config.json";
        this.config = this.getConfigFromFile(this.configFilePath);
    }
    getConfigFromFile(configFilePath) {
        // return {...require(configFilePath)} can't do this without an ignore comment at the class level... probably not worth it.
        const config = require(configFilePath);
        return {
            authentication: {
                userName: config.auth.userName,
                // TODO encode password
                encodedPassword: config.auth.password,
                secret: config.auth.secret
            }
        };
    }
}
exports.RequestHandler = RequestHandler;
