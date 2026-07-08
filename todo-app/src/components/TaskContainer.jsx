import "./TaskContainer.css";

function TaskContainer() {
  const containerTitle = "Tasks Due Today";
  const tasks = [
    { time: "9:00 AM", text: "Get eggs", isUrgent: true },
    { time: "9:05 AM", text: "Clean your room", isUrgent: false },
    { time: "10:00 AM", text: "Complete task1", isUrgent: false },
    { time: "4:00 PM", text: "Go for a walk", isUrgent: false },
  ];
  return (
    <>
      <h2>{containerTitle}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            style={{ listStyle: "none", color: "whitesmoke", fontSize: "1rem" }}
            key={index}
          >
            <span>{task.time}</span>-<span>{task.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskContainer;
