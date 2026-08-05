import { apiRequest } from "../utils/api";

export async function getTasks() {
  let taskList = await apiRequest("/todo");
  return taskList;
}

export async function getTaskById(id) {
  let taskItem = await apiRequest(`/todo/${id}`);
  return taskItem;
}

export async function createTask(title, deadline, isUrgent) {
  let taskObj = {
    title: title,
    deadline: deadline,
    isUrgent,
  };
  return await apiRequest("/todo", {
    method: "post",
    body: taskObj,
  });
}
