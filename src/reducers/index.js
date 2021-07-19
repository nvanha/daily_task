import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import itemEditing from "./itemEditing";
import searchTask from "./searchTask";
import filterTask from "./filterTask";

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  itemEditing,
  searchTask,
  filterTask,
});

export default myReducer;
