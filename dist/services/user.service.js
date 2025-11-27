"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
exports.userService = {
    async createUser(data) {
        return prisma.user.create({
            data: {
                name: data.name,
                gender: data.gender,
                dob: new Date(data.dob),
            },
        });
    },
    async getUsers() {
        return prisma.user.findMany({
            include: { todoLists: true },
        });
    },
    async getUserById(id) {
        return prisma.user.findUnique({
            where: { id },
            include: { todoLists: true },
        });
    },
    async updateUserById(id, data) {
        return prisma.user.update({
            where: { id },
            data: {
                name: data.name,
                gender: data.gender,
                dob: data.dob ? new Date(data.dob) : undefined,
            },
        });
    },
    async deleteUserById(id) {
        return prisma.user.delete({
            where: { id },
        });
    },
};
