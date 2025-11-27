"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoListsService = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
exports.todoListsService = {
    async createList(data) {
        if (!data.userId) {
            throw new Error("userId is required to create a todo list");
        }
        return prisma_1.default.todoList.create({
            data: {
                name: data.name,
                userId: data.userId,
                status: data.status ?? "UNFINISHED",
            },
        });
    },
    async getLists() {
        return prisma_1.default.todoList.findMany({
            include: { user: true, items: true },
        });
    },
    async getById(id) {
        return prisma_1.default.todoList.findUnique({
            where: { id },
            include: { items: true },
        });
    },
    async updateToDoList(id, data) {
        return prisma_1.default.todoList.update({
            where: { id },
            data: {
                name: data.name,
                userId: data.userId,
                status: data.status ?? "UNFINISHED",
            },
        });
    },
    async deleteToDoList(id) {
        return prisma_1.default.todoList.delete({
            where: { id },
        });
    },
};
