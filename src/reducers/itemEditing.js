import * as types from "../constants/ActionTypes";

const initialState = {
  id: "",
  name: "",
  category: "personal",
  day: "0",
  status: false,
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      return action.task;
    default:
      return state;
  }
};

export default myReducer;
