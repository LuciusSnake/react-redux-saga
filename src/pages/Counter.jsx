import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecreise = () => {
    setCount(prev => prev - 1);
  };

  const handleIncreise = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleDecreise}>-</button>
      <h1>{count}</h1>
      <button onClick={handleIncreise}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
