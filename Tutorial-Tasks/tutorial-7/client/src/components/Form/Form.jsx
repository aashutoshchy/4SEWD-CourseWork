import { useState } from "react";
import { useNavigate } from "react-router";
import { createTask } from "../../services/TaskService";
import "./Form.css";
import NavBar from "../NavBar/NavBar";

function Form({}) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [errors, setErros] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(title, deadline, isUrgent);
      alert("Task Saved Successfully");

      // Reset form after submission
      setTitle("");
      setDeadline("");
      setIsUrgent(false);
      navigate("/");
    } catch (err) {
      setErros(err.message);
      alert("Error occurred while creating todo");
    }
  };

  return (
    <>
      <h2>Add New Task</h2>
      {errors && <p>{errors}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Deadline</label>
          <br />
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={isUrgent}
            onChange={(e) => setIsUrgent(e.target.checked)}
          />
          <label>Is Urgent</label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
