import { prismaClient } from "src/database/prismaClient";
import AppError from "@shared/errors/AppError";
import { Tasks } from "@prisma/client";

interface IListByStatus {
  statusName: string;
}

class ListByTaskStatusService {
  public async execute({ statusName }: IListByStatus): Promise<Tasks[]> {
    if (
      statusName != "A Fazer" &&
      statusName != "Fazendo" &&
      statusName != "Feito"
    ) {
      throw new AppError("Status inexistente.");
    }

    const tasks = await prismaClient.tasks.findMany({
      where: {
        status: statusName,
      },
    });

    return tasks;
  }
}

export default ListByTaskStatusService;
