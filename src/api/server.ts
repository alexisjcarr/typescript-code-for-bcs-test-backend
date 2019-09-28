import express, { Application, Response, Request, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const server: Application = express();

server.use(express.static("public")); // for apiDocs

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.send(`<h1>Welcome to Hell, boys 😈</h1>`);
});

export default server;
