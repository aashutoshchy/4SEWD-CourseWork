import { useState } from "react";
import { createTask } from "../../services/taskService";

function Form({ setLoadData }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = {
          title,
          deadline,
          isUrgent,
        };
        createTask(formData);
        setLoadData(true);
      }}
    >
      {title.length > 10 ? <span>Too Long</span> : ""}
      <div>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Deadline</label>
        <input
          name="deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div>
        <input
          name="isUrgent"
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
          // onChange={}
        />
        <label>Is Urgent</label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
