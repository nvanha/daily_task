import * as types from "../constants/ActionTypes";

const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

const string_4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const randomID = () => {
  return string_4() + string_4() + "-" + string_4() + "-" + string_4();
};

const data = JSON.parse(localStorage.getItem("tasks"));
const initialState = data ? data : [];
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_TASK:
      return state;
    case types.SAVE_TASK: {
      if (action.task.name === "") {
        alert("New Task Is Not Available!!!");
      } else {
        let index = findIndex(state, action.task.id);
        let newTask = {
          id: action.task.id,
          name: action.task.name,
          category: action.task.category,
          status:
            action.task.status === "true" || action.task.status === true
              ? true
              : false,
          day: parseInt(action.task.day),
        };
        if (index !== -1) {
          state[index] = newTask;
        } else {
          newTask.id = randomID();
          state.push(newTask);
        }
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];
    }
    case types.UPDATE_STATUS_TASK: {
      let index = findIndex(state, action.id);
      let newTask = { ...state[index], status: !state[index].status };
      state[index] = newTask;
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }
    case types.DELETE_TASK: {
      let index = findIndex(state, action.id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }
    default:
      return state;
  }
};

export default myReducer;
