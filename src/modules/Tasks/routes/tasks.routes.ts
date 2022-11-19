import Router from "express";
import TasksController from "../controllers/TasksController";

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.post("/create", tasksController.create);
tasksRouter.get("/all", tasksController.indexAll);

export default tasksRouter;
