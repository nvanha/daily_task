import * as types from "../constants/ActionTypes";

const initialState = false;
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state;
    case types.CLOSE_FORM:
      return false;
    case types.OPEN_FORM:
      return true;
    default:
      return state;
  }
};

export default myReducer;
