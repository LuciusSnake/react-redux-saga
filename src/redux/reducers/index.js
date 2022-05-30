import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
