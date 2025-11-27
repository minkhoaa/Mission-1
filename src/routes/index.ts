import { Router } from "express";
import swaggerRouter from "./swagger.router";
import testRouter from "./test.router";
import userRouter from "./user.router";
import todolistRouter from "./todolist.router";
import todoItemRouter from "./todoitem.router";

const indexRouter = Router();

indexRouter.use("/docs", swaggerRouter);
indexRouter.use("/tests", testRouter);
indexRouter.use("/users", userRouter);
indexRouter.use("/todolist", todolistRouter);
indexRouter.use("/todoitem", todoItemRouter);

export default indexRouter;
