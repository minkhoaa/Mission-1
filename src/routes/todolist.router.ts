import { Router } from "express";
import { ToDoListController } from "../controllers/todolist.controller";

const todolistRouter = Router();

/**
 * @openapi
 * /todolist:
 *   post:
 *     summary: Tạo todolist
 *     tags: [todolist]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, userId, status]
 *             properties:
 *               name:
 *                 type: string
 *               userId:
 *                 type: string
 *               status:
 *                 type: string

 *     responses:
 *       201:
 *         description: Tạo thành công
 *   get:
 *     summary: Lấy danh sách todolist
 *     tags: [todolist]
 *     responses:
 *       200:
 *         description: Thành công
 * /todolist/{id}:
 *   get:
 *     summary: Lấy chi tiết todolist
 *     tags: [todolist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy
 *   patch:
 *     summary: Cập nhật todolist
 *     tags: [todolist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               userId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Thành công
 *   delete:
 *     summary: Xóa todolist
 *     tags: [todolist]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Xóa thành công
 */
todolistRouter.post("/", ToDoListController.create);
todolistRouter.get("/", ToDoListController.findAll);
todolistRouter.get("/:id", ToDoListController.findById);
todolistRouter.patch("/:id", ToDoListController.update);
todolistRouter.delete("/:id", ToDoListController.delete);

export default todolistRouter;
