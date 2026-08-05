import { Link } from "react-router";
import "./TaskItem.css";

function TaskItem({ task, index }) {
  return (
    <li
      className={task.isUrgent ? "task-item urgent-task" : "task-item"}
      key={index}
    >
      <span>{task.deadline}</span>-<span>{task.title}</span>
      &nbsp;&nbsp;&nbsp;
      <Link to={`/task/${task.id}`}>View Detail</Link>
    </li>
  );
}

export default TaskItem;
