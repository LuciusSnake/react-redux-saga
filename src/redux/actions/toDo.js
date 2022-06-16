import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actionTypes/toDoTypes";


export const addTodoAction = (text) => ({
  type: ADD_TODO,
  payload: text
});

export const removeTodoAction = (id) => ({
  type: REMOVE_TODO,
  payload: id
});

export const editTodoAction = (id, newText) => ({
  type: EDIT_TODO,
  payload: {id, text: newText}
});
