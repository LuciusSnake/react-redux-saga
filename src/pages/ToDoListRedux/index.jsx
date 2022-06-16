import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroup, FormControl, Button, ListGroup, } from "react-bootstrap";

import ToDoElementRedux from './_elements/ToDoElement';
import { addTodoAction } from '../../redux/actions/toDo';

import style from './style.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";

function ToDoRedux() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todoReducer);
  const [ text, setText ] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setText(value)
  }

  const handleClick = () => {
    dispatch(addTodoAction(text));
    setText('');
  }

  const handleEnterClick = (event) => {
    if(event.code === 'Enter') handleClick();
  }

  return (
    <div className={style.wrapper}>
      <div className={style.input__wrapper}>
        <InputGroup className={style.input_group}>
          <FormControl
            placeholder="Input Text"
            aria-label="Input Text"
            aria-describedby="basic-addon2"
            value={text}
            onChange={handleChange}
            onKeyPress={handleEnterClick}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleClick}
          >
            Add
          </Button>
        </InputGroup>
      </div>

      <div className={style.list__wrapper}>
        {!todos.length && <p>ToDO List is Empty</p>}

        <ListGroup as="ol" numbered>
          {todos.map(({ id, text }) => (
            <ToDoElementRedux
              key={id}
              id={id}
              text={text}
              list={todos}
            />
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default React.memo(ToDoRedux);