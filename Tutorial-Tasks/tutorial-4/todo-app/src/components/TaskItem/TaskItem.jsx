function TaskItem({ item, index }) {
  return (
    <li className={item.isUrgent ? "task-item urgent-task" : "task-item"}
        key={index}>

      <span>{item.time}</span>-<span>{item.text}</span>
    </li>
  );
  
}
export default TaskItem;