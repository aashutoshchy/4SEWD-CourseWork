import "./TaskContainer.css";
import TaskItem from "./TaskItem";
import { useState } from "react";

function TaskContainer({ title, tasks }) {
  // const containerTitle = "Tasks Due Today";
  // const tasks = [
  //   { time: "9:00 AM", text: "Get eggs", isUrgent: true },
  //   { time: "9:05 AM", text: "Clean your room", isUrgent: false },
  //   { time: "10:00 AM", text: "Complete task 1", isUrgent: false },
  //   { time: "4:00 PM", text: "Go for a walk", isUrgent: false },
  // ];

  const [filterUrgent, setFilterUrgent] = useState(false);
  const toggleUrgentFilter = () => {
    // This sets the state opposite to the previous value
    setFilterUrgent((prev) => !prev);
  };

  if (tasks.length === 0) {
    return <h2>No Pending Tasks</h2>;
  } else {
    return (
      <>
        <h2>{title}</h2>
        <div>
          <input
            type="checkbox"
            checked={false}
            id="urgent-filter"
            // onChange={() => setFilterUrgent((prev) => !prev)}
            onChange={toggleUrgentFilter}
          />
          <label htmlFor="urgent-filter">Filter Urgent</label>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <TaskItem task={task} index={index} />
          ))}
        </ul>
      </>
    );
  }
}

export default TaskContainer;
