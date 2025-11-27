import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const UserController = {
  async create(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error creating user" });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const users = await userService.getUsers();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching users" });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(req.params.id);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching user" });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const user = await userService.updateUserById(req.params.id, req.body);
      res.json(user);
    } catch (err: any) {
      if (err.code === "P2025") return res.status(400).json("User not found");
      res.status(500).json({ message: "Error while updating" });
    }
  },
  async deleteUser(req: Request, res: Response) {
    try {
      await userService.deleteUserById(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ mesage: "Error while deleting" });
    }
  },
};
