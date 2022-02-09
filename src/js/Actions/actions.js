import {
  ADD_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  COMPLETED_TASKS,
} from "../Constants/actions-types";

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

export const toggleTask = (task) => {
  return {
    type: TOGGLE_TASK,
    payload: task,
  };
};

export const completedTasks = (filter) => {
  return {
    type: COMPLETED_TASKS,
    payload: filter
  };
};
