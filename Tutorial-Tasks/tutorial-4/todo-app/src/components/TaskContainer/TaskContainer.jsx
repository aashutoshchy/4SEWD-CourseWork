import "./TaskContainer.css";
import TaskItem from "../TaskItem/TaskItem.jsx";
import { useState } from "react";
function TaskContainer({ taskList }) {
  const taskList = taskList;
  const [filterUrgent, setFilterUrgent] = useState(false);
  let filteredTask = taskList;
  if (filterUrgent) {
    filteredTask = taskList.filter((item) => item.isUrgent);
  }

  //Conditional Rendering
  if (taskList.length === 0) {
    return <h2>No Pending Tasks</h2>;
  }

  //Dynamic Generated list
  const taskListJSX = filteredTask.map((item, index) => {
    return <TaskItem item={item} index={index} />;
  });
  return (
    <>
      <button
        onClick={() => {
          setFilterUrgent(!filterUrgent);
        }}
      >
        {filterUrgent ? "Show All" : "Filter Urgent"}
      </button>
      <ul>{taskListJSX}</ul>
    </>
  );
}
export default TaskContainer;
