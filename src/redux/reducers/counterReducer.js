import { INCREASE, DECREASE, RESET } from "../actionTypes/counter";


const INITIAL_STATE = {
  value: 0
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE: return { ...state, value: state.value + 1 };
    case DECREASE: return { ...state, value: state.value - 1 };
    case RESET: return { ...state, value: 0 };

    default: return { ...state };
  }
}

export default counterReducer;
