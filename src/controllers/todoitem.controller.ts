import { Request, Response } from "express";
import { ToDoItemService } from "../services/todoitem.service";

export const TodoItemController = {
  async Create(req: Request, res: Response) {
    try {
      const newItem = await ToDoItemService.CreateToDoItem(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async GetAll(req: Request, res: Response) {
    try {
      const items = await ToDoItemService.GetToDoItemList();
      if (!items) return res.status(404).json({ message: "List empty" });
      return res.status(200).json(items);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async GetByGroupId(req: Request, res: Response) {
    try {
      const items = await ToDoItemService.GetToDoItemByListId(
        req.params.todoGroupId
      );
      if (!items) return res.status(404).json("Not found item");
      return res.status(200).json(items);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async Update(req: Request, res: Response) {
    try {
      const updatedItem = await ToDoItemService.UpdateTodoItem(
        req.params.id,
        req.body
      );
      return res.json(updatedItem);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  async Delete(req: Request, res: Response) {
    try {
      const deletedItem = await ToDoItemService.DeleteTodoItem(req.params.id);
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
