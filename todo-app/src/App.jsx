import PageTitle from "./components/PageTitle";
import TaskContainer from "./components/TaskContainer";

function App() {
  const containerTitle = "Tasks Due Today";
  const tasks = [
    { time: "9:00 AM", text: "Get eggs", isUrgent: true },
    { time: "9:05 AM", text: "Clean your room", isUrgent: false },
    { time: "10:00 AM", text: "Complete task 1", isUrgent: false },
    { time: "4:00 PM", text: "Go for a walk", isUrgent: false },
  ];
  return (
    <>
      <PageTitle />
      <TaskContainer tasks={tasks} containerTitle={containerTitle} />
    </>
  );
}

export default App;
