import AppError from "@shared/errors/AppError";
import { prismaClient } from "src/database/prismaClient";

interface IIdTask {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IIdTask): Promise<void> {
    const taskExists = await prismaClient.tasks.findUnique({
      where: {
        id: id,
      },
    });

    if (!taskExists) {
      throw new AppError("Task não encontrada.");
    }

    const task = await prismaClient.tasks.delete({
      where: {
        id: id,
      },
    });
  }
}

export default DeleteProductService;
