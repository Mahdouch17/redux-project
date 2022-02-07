import { ADD_TASK, EDIT_TASK, TOGGLE_TASK } from "../Constants/actions-types";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const editTask = (newTask) => {
  return {
    type: EDIT_TASK,
    payload: newTask,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};
