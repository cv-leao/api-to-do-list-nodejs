import { Request, Response } from "express";
import CreateTaskService from "../services/CreateTaskService";
import ListTasksService from "../services/ListTasksService";

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

  public async indexAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const listTasksService = new ListTasksService();

    const tasks = listTasksService.execute().catch((error) => {
      response.statusCode;
      return error;
    });

    return response.json(tasks);
  }
}

export default TasksController;
