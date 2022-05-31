import React from 'react'
import { Link } from "react-router-dom";

import style from "./style.module.scss"

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li><Link className={style.link} to="/">Home</Link></li>
          <li><Link className={style.link} to="users">Users</Link></li>
          <li><Link className={style.link} to="counter">Counter</Link></li>
          <li><Link className={style.link} to="redux-counter">Redux Counter</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
