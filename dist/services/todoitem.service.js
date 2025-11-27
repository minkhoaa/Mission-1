"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoItemService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
exports.ToDoItemService = {
    async CreateToDoItem(data) {
        return prisma_1.default.todoItem.create({
            data: {
                todoGroupId: data.todoGroupId,
                name: data.name,
                des: data.des,
                dueAt: data.dueAt,
            },
        });
    },
    async GetToDoItemList() {
        return prisma_1.default.todoItem.findMany();
    },
    async GetToDoItemByListId(todoGroupId) {
        return prisma_1.default.todoItem.findMany({
            where: { todoGroupId },
        });
    },
    async UpdateTodoItem(id, data) {
        return prisma_1.default.todoItem.update({
            where: { id },
            data: {
                todoGroupId: data.todoGroupId,
                name: data.name,
                des: data.des,
                dueAt: data.des,
            },
        });
    },
    async DeleteTodoItem(id) {
        return prisma_1.default.todoItem.delete({ where: { id } });
    },
};
