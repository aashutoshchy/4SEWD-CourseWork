const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todos");
const userInput = document.querySelector(".user-input input");
const todos = [];

const addTask = () => {
  let task = {
    text: userInput.value,
  };
  console.log("1: " + task);
  todos.push(task);

  displayTask(todos);
};

const displayTask = (task) => {
  console.log("2" + todos);
  todoList.innerHTML = todos.map((todo) => {
    `<li>${todo.text}<i class="fa-solid fa-trash"></i></li>`;
  });
};

addBtn.addEventListener("click", addTask);
