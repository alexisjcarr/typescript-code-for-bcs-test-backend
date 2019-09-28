import express, { Application, Response, Request, NextFunction } from "express";

const server: Application = express();

const add = (a: number, b: number): number => a + b;

server.get("/", (req: Request, res: Response, next: NextFunction): void => {
  console.log(add(5, 5));
  res.send("hi there");
});

server.listen(5000, (): void => {
  console.log("Server running");
});
