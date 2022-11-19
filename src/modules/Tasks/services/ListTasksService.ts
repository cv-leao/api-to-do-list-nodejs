import { Tasks } from "@prisma/client";
import { prismaClient } from "src/database/prismaClient";

class ListTasksService {
  public async execute(): Promise<Tasks[]> {
    const tasks = prismaClient.tasks.findMany();

    return tasks;
  }
}

export default ListTasksService;
