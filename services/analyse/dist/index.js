"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redditRequestHandler_1 = __importDefault(require("./requestHandlers/redditRequestHandler/redditRequestHandler"));
let requestHandler = new redditRequestHandler_1.default();
