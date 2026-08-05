import express from "express";

const PORT = 3000;

let nextId = 4;
// DATA SOURCE
const todoList = [
  {
    id: 1,
    title: "Todo list item 1",
    deadline: "2026-07-01",
    isUrgent: true,
  },
  {
    id: 2,
    title: "Todo list item 2",
    deadline: "2026-07-01",
    isUrgent: false,
  },
  {
    id: 3,
    title: "Todo list item 3",
    deadline: "2026-07-01",
    isUrgent: false,
  },
];

const app = express();

// Adds the json parsing middleware to the application
// Adding this middleware, parses the JSON data from request
// Parsing is done before hitting the endpoints
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my todo-list app");
});

//
// REST TODO LIST API => /api/todo
app.get("/api/todo", (req, res) => {
  return res.status(200).json(todoList);
});

// Get todo by id
app.get("/api/todo/:id", (req, res) => {
  const paramId = Number(req.params.id);
  const taskItem = todoList.find((item) => item.id === paramId);
  if (!taskItem) {
    return res.status(404).json({
      message: "Todo List Item not found",
    });
  }

  return res.status(200).json(taskItem);
});

app.post("/api/todo", (req, res) => {
  const { title, deadline, isUrgent } = req.body ?? {};
  if (!title || typeof title !== "string") {
    return res.status(400).json({
      message: "Title is required and must be a string",
    });
  }

  if (!deadline || Date(deadline) === NaN) {
    return res.status(400).json({
      message: "Deadline is required and must be a valid date",
    });
  }

  if (typeof isUrgent !== "boolean") {
    return res.status(400).json({
      message: "Is Urgent is required and must be a boolean value",
    });
  }

  const newTodo = {
    id: nextId++,
    title,
    deadline,
    isUrgent,
  };

  todoList.push(newTodo);
  return res.status(201).json({
    message: "Todo item created successfully",
    data: newTodo,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
