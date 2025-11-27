import { Gender, PrismaClient } from "@prisma/client";
import { any } from "zod";
import { da, tr } from "zod/v4/locales";
export interface CreateUserDto {
  name: string;
  gender: "M" | "F";
  dob: string;
}

export interface UpdateUserDto {
  name?: string;
  gender?: "M" | "F";
  dob?: string;
}
var prisma = new PrismaClient();
export const userService = {
  async createUser(data: CreateUserDto) {
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

  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: { todoLists: true },
    });
  },

  async updateUserById(id: string, data: UpdateUserDto) {
    return prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        gender: data.gender as Gender | undefined,
        dob: data.dob ? new Date(data.dob) : undefined,
      },
    });
  },
  async deleteUserById(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  },
};
