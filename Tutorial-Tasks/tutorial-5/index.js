import express from "express";

const PORT = 3000;

// Data Source
let nextId = 5;
const todoList = [
  {
    id: 1,
    title: "Todo List item1",
    deadline: "2026-07-01",
  },
  {
    id: 2,
    title: "Todo List item1",
    deadline: "2026-07-01",
  },
  {
    id: 3,
    title: "Todo List item1",
    deadline: "2026-07-01",
  },
  {
    id: 4,
    title: "Todo List item1",
    deadline: "2026-07-01",
  },
];

const app = express();

// Add the json parsing middleware to the applications
// Adding this middleware parses the JSON data from requrest

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome too my todo-list app");
});

// REST TODO LIST API =? /api/
app.get("/api/todo", (req, res) => {
  return res.status(200).json(todoList);
});

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
  const { title, deadline } = req.body ?? {};
  if (!title && typeof title !== "string") {
    return res.status(400).json({
      message: "Title is required and must be string",
    });
  }

  if (!deadline || Date(deadline) === NaN) {
    return res.status(400).json({
      message: "Deadline is required and must be a valid date",
    });
  }

  const newTodo = {
    id: nextId++,
    title,
    deadline,
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
