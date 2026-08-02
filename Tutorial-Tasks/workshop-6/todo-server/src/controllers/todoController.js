import ValidationError from "../errors/validationError.js";
import TodoService from "../services/todoService.js";
export const getAllTodo = (req, res) => {
  const allTodos = TodoService.getAllTodo();
  return res.status(200).json(allTodos);
};

export const getTodoById = (req, res) => {
  const id = Number(req.params.id);
  const todo = TodoService.getById(id);
  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  return res.status(200).json(todo);
};

export const createTodo = (req, res, next) => {
  try {
    const data = req.body ?? {};
    const createdTodo = TodoService.createTodo(data);
    return res.status(201).json({
      message: "Created successfully",
      data: createTodo,
    });
  } catch (err) {
    next(err);
  }
};
