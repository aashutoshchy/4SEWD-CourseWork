import sequelize from "../configs/database.js";
import { DataTypes } from "sequelize";

const TodoModel = sequelize.define("TodoModel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isUrgent: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default TodoModel;
