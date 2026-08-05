import TodoModel from "../models/todoModel.js";
import ValidationError from "../errors/validationError.js";
import { Op } from "sequelize";
const TodoService = {
  getAllTodo: async () => {
    return TodoModel.findAll();
  },
  getById: (id) => {
    return TodoModel.findByPk(id);
  },
  createTodo: async ({ title, deadline, isUrgent }) => {
    return await TodoModel.create({
      title,
      deadline,
      isUrgent,
    });
  },
  updateTodo: async (id, { title, deadline, isUrgent }) => {
    const todo = await TodoModel.findByPk(id);
    if (!todo) {
      return null;
    }
    todo.title = title;
    todo.deadline = deadline;
    todo.isUrgent = isUrgent;
    const updatedTodo = await todo.save();
    return updatedTodo;
  },
};

export default TodoService;
