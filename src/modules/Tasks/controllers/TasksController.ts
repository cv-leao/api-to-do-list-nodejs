import { Request, Response } from "express";
import CreateTaskService from "../services/CreateTaskService";

class TasksController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description, status } = await request.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService
      .execute({ description, status })
      .catch((error) => {
        response.statusCode;
        return error;
      });

    return response.json(task);
  }
}

export default TasksController;
