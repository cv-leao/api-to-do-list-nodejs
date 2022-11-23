import { Request, Response } from "express";
import CreateTaskService from "../services/CreateTaskService";
import DeleteProductService from "../services/DeleteProductService";
import ListByTaskStatusService from "../services/ListByTaskStatusService";
import ListTasksService from "../services/ListTasksService";
import UpdateTaskService from "../services/UpdateTaskService";

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

    const tasks = await listTasksService.execute().catch((error) => {
      response.statusCode;
      return error;
    });

    return response.json(tasks);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status } = await request.body;

    const updateTaskService = new UpdateTaskService();

    const taskUpdated = await updateTaskService
      .execute({ id, status })
      .catch((error) => {
        response.statusCode;
        return error;
      });

    return response.json(taskUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute({ id }).catch((error) => {
      response.statusCode;
      return error;
    });

    return response.json([]);
  }

  public async listByStatus(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { statusName } = request.params;

    const listByTaskStatus = new ListByTaskStatusService();

    const tasks = await listByTaskStatus
      .execute({ statusName })
      .catch((error) => {
        response.statusCode;
        return error;
      });

    return response.json(tasks);
  }
}

export default TasksController;
