import tasksRouter from "@modules/Tasks/routes/tasks.routes";
import { Router } from "express";

const routes = Router();

routes.use("/tasks", tasksRouter);

export default routes;
