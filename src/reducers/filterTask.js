import * as types from "../constants/ActionTypes";

const initialState = -1;
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TASK:
      return parseInt(action.filter);
    default:
      return state;
  }
};

export default myReducer;
