import { TodoListStatus } from "@prisma/client";
import prisma from "../config/prisma";
import { tr } from "zod/v4/locales";

export interface CreateToDoListDto {
  name: string;
  userId: string;
  status?: "FINISH" | "UNFINISHED";
}

export interface UpdateToDoListDto {
  name?: string;
  userId?: string;
  status?: "FINISH" | "UNFINISHED";
}

export const todoListsService = {
  async createList(data: CreateToDoListDto) {
    if (!data.userId) {
      throw new Error("userId is required to create a todo list");
    }

    return prisma.todoList.create({
      data: {
        name: data.name,
        userId: data.userId,
        status: (data.status as TodoListStatus) ?? "UNFINISHED",
      },
    });
  },
  async getLists() {
    return prisma.todoList.findMany({
      include: { user: true, items: true },
    });
  },
  async getById(id: string) {
    return prisma.todoList.findUnique({
      where: { id },
      include: { items: true },
    });
  },
  async updateToDoList(id: string, data: UpdateToDoListDto) {
    return prisma.todoList.update({
      where: { id },
      data: {
        name: data.name,
        userId: data.userId,
        status: (data.status as TodoListStatus) ?? "UNFINISHED",
      },
    });
  },
  async deleteToDoList(id: string) {
    return prisma.todoList.delete({
      where: { id },
      
    });
  },
};
