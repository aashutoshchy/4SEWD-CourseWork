import sequelize from "../configs/database.js";
import TodoModel from "../models/todoModel.js";
import { config } from "../configs/index.js";
async function sync() {
  try {
    await sequelize.sync({ alter: true });
  } catch (err) {
    console.error("Error while syncing db: ", err.stack);
  }
}
await sync();
