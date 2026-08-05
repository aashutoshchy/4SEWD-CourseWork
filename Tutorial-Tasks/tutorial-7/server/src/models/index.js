import UserModel from "./userModel";
import TodoModel from "./todoModel.js";

UserModel.hasMany(TodoModel, {
  foreignKey: "userId",
});

TodoModel.belongsTo(UserModel, {
  foreignKey: "userId",
});

export { UserModel, TodoModel };
