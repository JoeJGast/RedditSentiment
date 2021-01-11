import { config } from "process";
import Snoowrap, { Listing, Submission } from "snoowrap";  // API for accessing reddit: https://not-an-aardvark.github.io/snoowrap/
import { inherits } from "util";
import {RequestHandler} from "../requestHandler"

export default class RedditRequestHandler extends RequestHandler {
    constructor() {
        super();
        console.log(JSON.stringify(this.config));
        // TODO: bind logger
        // TODO: clean up code below - move stuff to request handler.
        // Alternatively, just pass in a username and password for script-type apps.
        const snoowrap = new Snoowrap({
            // TODO: add below to config
            userAgent: `Windows.0Ny3yNqnnjaLUw.1.0.0`,
            clientId: this.config.authentication.clientId,
            clientSecret: this.config.authentication.clientSecret,
            username: this.config.authentication.userName,
            password: this.config.authentication.encodedPassword
        });
        snoowrap.getSubreddit("politics").getTop().then(submissions =>{
            let curSub = submissions[0];
            // TODO: pull request for snoowrap to fix Listing typedef.
            let comments = curSub.comments.fetchMore({amount:10}).forEach((item) => console.log(item))
        });
    }
    

}

