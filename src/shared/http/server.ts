import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import AppError from "../errors/AppError";
import "../typeorm";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
);

app.listen(3001, () => {
  console.log("Server started on port 3001!");
});
