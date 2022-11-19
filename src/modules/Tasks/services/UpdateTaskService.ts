import AppError from "@shared/errors/AppError";
import { prismaClient } from "src/database/prismaClient";
interface ITaskToUpdate {
  id: string;
  status: string;
}

interface ITaskUpdated {
  id: string;
  description: string;
  status: string;
}

class UpdateTaskService {
  public async execute({ id, status }: ITaskToUpdate): Promise<ITaskUpdated> {
    const taskExists = await prismaClient.tasks.findUnique({
      where: {
        id: id,
      },
    });

    if (!taskExists) {
      throw new AppError("A Task não foi encontrada.");
    }

    if (status != "A Fazer" && status != "Fazendo" && status != "Feito") {
      throw new AppError("O status é incompatível com as opções disponíveis.");
    }

    const taskUpdated = await prismaClient.tasks.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    return taskUpdated;
  }
}

export default UpdateTaskService;
