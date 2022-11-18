import Router from "express";
import TasksController from "../controllers/TasksController";

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.post("/create", tasksController.create);

export default tasksRouter;
