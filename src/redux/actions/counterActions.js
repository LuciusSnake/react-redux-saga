import { DECREASE, INCREASE, RESET } from "../actionTypes/counter";


export const increaseAction = () => ({
  type: INCREASE
});

export const decreaseAction = () => ({
  type: DECREASE
});

export const resetAction = () => ({
  type: RESET
});
