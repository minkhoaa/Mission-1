import { any } from "zod";
import prisma from "../config/prisma";

export interface CreateToDoItemDto {
  todoGroupId: string;
  name: string;
  des?: string;
  dueAt: Date;
}

export interface UpdateToDoItemDto {
  todoGroupId?: string;
  name?: string;
  des?: string;
  dueAt?: Date;
}

export const ToDoItemService = {
  async CreateToDoItem(data: CreateToDoItemDto) {
    return prisma.todoItem.create({
      data: {
        todoGroupId: data.todoGroupId,
        name: data.name,
        des: data.des,
        dueAt: data.dueAt,
      },
    });
  },
  async GetToDoItemList() {
    return prisma.todoItem.findMany();
  },
  async GetToDoItemByListId(todoGroupId: string) {
    return prisma.todoItem.findMany({
      where: { todoGroupId },
    });
  },
  async UpdateTodoItem(id: string, data: UpdateToDoItemDto) {
    return prisma.todoItem.update({
      where: { id },
      data: {
        todoGroupId: data.todoGroupId,
        name: data.name,
        des: data.des,
        dueAt: data.des,
      },
    });
  },
  async DeleteTodoItem(id: string) {
    return prisma.todoItem.delete({ where: { id } });
  },
};
