import { Tasks } from "@prisma/client";
import AppError from "@shared/errors/AppError";
import { prismaClient } from "../../../database/prismaClient";

interface ITaskToCreate {
  description: string;
  status: string;
}

class CreateTaskService {
  public async execute({ description, status }: ITaskToCreate): Promise<Tasks> {
    if (description === null) {
      throw new AppError("A Task precisa de uma descrição.");
    }

    if (status === null) {
      throw new AppError("A Task precisa de um status.");
    }

    const task = prismaClient.tasks.create({
      data: {
        description,
        status,
      },
    });

    return task;
  }
}

export default CreateTaskService;
