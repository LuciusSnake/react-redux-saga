import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import todoReducer from "./toDoReducer";


const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
});

export default rootReducer;
