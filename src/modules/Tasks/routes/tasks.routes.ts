import Router from "express";
import TasksController from "../controllers/TasksController";

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.post("/create", tasksController.create);
tasksRouter.get("/all", tasksController.indexAll);
tasksRouter.put("/update/:id", tasksController.update);
tasksRouter.delete("/delete/:id", tasksController.delete);

export default tasksRouter;
