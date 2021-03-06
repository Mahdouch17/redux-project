import {
  ADD_TASK,
  COMPLETED_TASKS,
  EDIT_TASK,
  TOGGLE_TASK,
} from "../Constants/actions-types";

const initialState = {
  tasks: [
    { id: "id0", description: "Ranger la vaisselle", isDone: false },
    { id: "id1", description: "Répondre appel d'offres", isDone: false },
    { id: "id2", description: "Signer contrat", isDone: false },
  ],
  filter: "",
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],filter:state.filter
      };
    case EDIT_TASK:
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, description: action.payload.description };
          }
          return task;
        }),filter:state.filter
      };
    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return {
            ...task,
            isDone: !task.isDone,
          };
        }),filter:state.filter
      };
    case COMPLETED_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducers;
