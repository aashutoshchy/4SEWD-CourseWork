import localforage from "localforage";

const taskKey = "taskList";

export async function getAllTask() {
  let taskList = await localforage.getItem(taskKey);

  //   If taks list is not found, return empty list
  if (!taskList) return [];

  //   If task list is found, return task list
  return taskList;
}

export async function createTask(taskObj) {
  // Create old array
  let taskList = await getAllTask();
  //   creates a new array
  taskList = [...taskList, taskObj];
  await localforage.setItem(taskKey, taskList);
}
