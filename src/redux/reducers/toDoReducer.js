import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actionTypes/toDoTypes";

const INITIAL_STATE = {
  todos: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: return { ...state, todos: [{ id: new Date().getTime(), text: action.payload }, ...state.todos] };
    case REMOVE_TODO: return { ...state, todos: [...state.todos.filter(item => item.id !== action.payload)] };
    case EDIT_TODO: {
      const index = state.todos.findIndex((item) => item.id === action.payload.id);
      const newList = [ ...state.todos ];
      newList[index] = action.payload;

      return { ...state, todos: newList };
    }
    default: return { ...state };
  }
}

export default todoReducer;
