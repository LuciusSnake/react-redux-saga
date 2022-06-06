import React from 'react'
import { Link } from 'react-router-dom'

import style from "./style.module.scss"

function Footer() {
  return (
    <footer className={style.footer}>
        <nav className={style.nav}>
            <ul className={style.ul}>
              <li><Link className={style.link} to="/">Home</Link></li>
              <li><Link className={style.link} to="users">Users</Link></li>
              <li><Link className={style.link} to="counter">Counter</Link></li>
              <li><Link className={style.link} to="todo">ToDo List</Link></li>
              <li><Link className={style.link} to="redux-counter">Redux Counter</Link></li>
            </ul>
        </nav>
    </footer>
  )
}

export default React.memo(Footer)