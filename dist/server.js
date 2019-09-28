"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
const add = (a, b) => a + b;
server.get("/", (req, res, next) => {
    console.log(add(5, 5));
    res.send("hi there");
});
server.listen(5000, () => {
    console.log("Server running");
});
