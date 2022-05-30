import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="counter">Counter</Link>
      <Link to="redux-counter">Redux Counter</Link>
    </nav>
  );
};

export default React.memo(Header);
