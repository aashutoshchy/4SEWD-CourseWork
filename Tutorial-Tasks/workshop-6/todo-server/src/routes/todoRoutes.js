import { Router } from "express";
import {
  createTodo,
  getAllTodo,
  getTodoById,
} from "../controllers/todoController.js";
import {
  createTodoValidation,
  idParamsValidator,
} from "../validators/todoValidators.js";
import { validate } from "../middlewares/validateMiddleware.js";

const todoRoutes = Router();

todoRoutes.get("/", getAllTodo);
todoRoutes.get("/:id", idParamsValidator, validate, getTodoById);
todoRoutes.post("/", createTodoValidation, validate, createTodo);

export default todoRoutes;
