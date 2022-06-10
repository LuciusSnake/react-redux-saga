import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actionTypes/toDoTypes";


export const addTodoAction = (text) => ({
  type: ADD_TODO,
  payload: text
});
