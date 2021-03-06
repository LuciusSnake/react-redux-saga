import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main from '../pages/Main';
import Counter from '../pages/Counter';
import Error404 from "../pages/404";
import ReduxCounter from '../pages/ReduxCounter';
import Users from '../pages/Users/Users';
import ToDo from '../pages/ToDoList';
import ToDoRedux from '../pages/ToDoListRedux'

const RouteComponent = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/counter"} element={<Counter />} />
      <Route path={"/redux-counter"} element={<ReduxCounter />} />
      <Route path={"/users"} element={<Users />} />
      <Route path={"/todo"} element={<ToDo />} />
      <Route path={"/todolist"} element={<ToDoRedux />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
  );
}

export default RouteComponent;