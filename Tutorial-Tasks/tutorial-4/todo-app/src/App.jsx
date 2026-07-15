import Form from "./components/Form/Form.jsx";
import PageTitle from "./components/PageTitle/PageTitle.jsx";
import TaskContainer from "./components/TaskContainer/TaskContainer.jsx";
//function/hook that declare state variable and a function to update it
import { useEffect, useState } from "react";
import { getAllTask } from "./services/taskService.js";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [testState, setTestState] = useState(false);
  if (loadData) {
    useEffect(() => {
      async () => {
        setTaskList(await getAllTask());
        setLoadData(false);
        console.log("Api Loaded. " + loadData);
      };
    }, [loadData]);
  }
  console.log("Api Loaded. " + loadData);
  return (
    <>
      <PageTitle />
      <TaskContainer />
      <Form />
      <button onClick={(prev) => setTestState(!prev)}>Click</button>
    </>
  );
}

export default App;
