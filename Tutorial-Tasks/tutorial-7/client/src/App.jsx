import PageTitle from "./components/PageTitle/PageTitle";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import TaskDetail from "./pages/TaskDetail";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

{
  /* <PageTitle />
      <TaskContainer containerTitle={"Tasks Pending Today"} />
      <Form />*/
}
export default App;
