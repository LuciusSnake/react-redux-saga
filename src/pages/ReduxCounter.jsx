import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increaseAction, decreaseAction, resetAction } from "../redux/actions/counterActions";


const ReduxCounter = () => {
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);
  const { value } = useSelector((Reducers) => Reducers.counterReducer);

  const handleDecreise = () => {
    // setCount(prev => prev - 1);
    dispatch(decreaseAction());
  };

  const handleIncreise = () => {
    // setCount((prev) => prev + 1);
    dispatch(increaseAction());
  };

  const handleReset = () => {
    // setCount(0);
    dispatch(resetAction());
  };

  return (
    <div>
      <button onClick={handleDecreise}>-</button>
      <h1>{value}</h1>
      <button onClick={handleIncreise}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ReduxCounter;
