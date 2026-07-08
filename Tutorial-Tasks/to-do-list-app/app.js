const addBtn = document.querySelector(".add-btn");
const todoLists = document.querySelector(".todos"); // <ul>
const userInput = document.querySelector(".user-input input");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTask = () => {
  let task = userInput.value;
  if (task.trim() === "") return;
  tasks.push({
    task,
    isCompleted: false,
  });
  showTask(todoLists, tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const showTask = (todoLists, tasks = []) => {
  todoLists.innerHTML = tasks
    .map((todo) => {
      return `<li class="${todo.isCompleted ? "completed" : ""}">${todo.task}<i class="fa-solid fa-trash"></i></li>`;
    })
    .join("");
};

showTask(todoLists, tasks);
addBtn.addEventListener("click", addTask);
