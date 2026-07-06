const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todos");
const userInput = document.querySelector(".user-input input");

const addTask = () => {
  let text = userInput.value;
  if (text.trim() == "") return;
  let li = document.createElement("li");
  li.innerHTML = `${text}<i class="fa-solid fa-trash"></i>`;
  todoList.appendChild(li);
  li.querySelector("i").addEventListener("click", () => {
    li.remove();
  });
};

addBtn.addEventListener("click", addTask);
