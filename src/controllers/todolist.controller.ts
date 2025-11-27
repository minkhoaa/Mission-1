import { Request, Response } from "express";
import { todoListsService } from "../services/todolist.service";

export const ToDoListController = {
  async create(req: Request, res: Response) {
    try {
      const todo = await todoListsService.createList(req.body);
      res.status(201).json(todo);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  async update(req: Request, res: Response) {
    try {
      const todo = await todoListsService.updateToDoList(
        req.params.id,
        req.body
      );
      res.json(todo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error while updating" });
    }
  },
  async findAll(req: Request, res: Response) {
    const list = await todoListsService.getLists();
    res.json(list);
  },
  async findById(req: Request, res: Response) {
    try {
      const list = await todoListsService.getById(req.params.id);

      if (!list) {
        return res.status(404).json({
          message: "List not found",
        });
      }

      return res.json(list);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error while fetching" });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      await todoListsService.deleteToDoList(req.params.id);
      res.status(204).json({
        message: "Xóa oke rồi đó",
      });
    } catch (err) {
      res.status(500).json({ mesage: "Error while deleting" });
    }
  },
};
