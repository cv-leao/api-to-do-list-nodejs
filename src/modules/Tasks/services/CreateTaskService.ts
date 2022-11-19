import { Tasks } from "@prisma/client";
import AppError from "@shared/errors/AppError";
import { prismaClient } from "../../../database/prismaClient";

interface ITaskToCreate {
  description: string;
  status: string;
}

class CreateTaskService {
  public async execute({ description, status }: ITaskToCreate): Promise<Tasks> {
    if (!description || description === "") {
      throw new AppError("A Task precisa de uma descrição.");
    }

    if (!status || status === "") {
      throw new AppError("A Task precisa de um status.");
    }

    if (status != "A Fazer" && status != "Fazendo") {
      throw new AppError(
        "O status da Task deve iniciar com 'A Fazer' ou 'Fazendo'"
      );
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
