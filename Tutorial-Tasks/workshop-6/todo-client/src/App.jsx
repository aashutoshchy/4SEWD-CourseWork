import PageTitle from "./components/PageTitle/PageTitle";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router";
import AddForm from "./pages/AddForm";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      {/* <PageTitle />
      <TaskContainer containerTitle={"Tasks Pending Today"} />
      <Form /> */}
      {/* <Route path="/task/:id" element={<Home />} /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
