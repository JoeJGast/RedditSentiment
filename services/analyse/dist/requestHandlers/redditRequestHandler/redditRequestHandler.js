"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snoowrap_1 = __importDefault(require("snoowrap")); // API for accessing reddit: https://not-an-aardvark.github.io/snoowrap/
const requestHandler_1 = require("../requestHandler");
class RedditRequestHandler extends requestHandler_1.RequestHandler {
    constructor() {
        super();
        console.log(JSON.stringify(this.config));
        // TODO: bind logger
        // TODO: clean up code below - move stuff to request handler.
        // Alternatively, just pass in a username and password for script-type apps.
        const snoowrap = new snoowrap_1.default({
            // TODO: add below to config
            userAgent: `Windows.0Ny3yNqnnjaLUw.1.0.0`,
            clientId: '47sNetBQnuGlhA',
            clientSecret: this.config.authentication.secret,
            username: this.config.authentication.userName,
            password: this.config.authentication.encodedPassword
        });
        snoowrap.getSubreddit("politics").getTop().then(submissions => {
            let curSub = submissions[0];
            // TODO: pull request for snoowrap to fix Listing typedef.
            let comments = curSub.comments.fetchMore({ amount: 10 }).then(comments => {
                comments;
            });
        });
    }
}
exports.default = RedditRequestHandler;
