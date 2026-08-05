import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTaskById } from "../../services/TaskService";
function TaskDetail() {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { title, deadline, isUrgent } = isLoading ? {} : task;

  const { id } = useParams();

  useEffect(() => {
    getTaskById(id).then((data) => {
      setTask(data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>Task Detail</h3>
      <div>
        <span>Title:</span>
        <span>{title}</span>
      </div>
      <div>
        <span>Deadline:</span>
        <span>{deadline}</span>
      </div>
      <div>
        <span>Is Urgent:</span>
        <span>{isUrgent ? "Yes" : "No"}</span>
      </div>
    </div>
  );
}

export default TaskDetail;
