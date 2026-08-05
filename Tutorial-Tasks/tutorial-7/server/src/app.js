import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import todoRoutes from "./routes/todoRoutes.js";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  }),
);
app.use(express.json());

app.use("/api/todo", todoRoutes);

app.use(errorHandler);
export default app;
