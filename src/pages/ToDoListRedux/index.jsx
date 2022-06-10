import React from 'react'
import { useState } from 'react';
import { InputGroup, FormControl, Button, ListGroup, } from "react-bootstrap";
import ToDoElementRedux from './_elements/ToDoElement';

import "bootstrap/dist/css/bootstrap.min.css";
import style from './style.module.scss'

function ToDoRedux() {
  const [ text, setText ] = useState('');
  const [ list, setList ] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setText(value)
  }
  
  const handleClick = () => {
    setList(prevState => [...prevState, {id: new Date().getTime(), text: text}]);
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
        {!list.length && <p>ToDO List is Empty</p>}

        <ListGroup as="ol" numbered>
          {list.map(({ id, text }) => (
            <ToDoElementRedux
              key={id}
              id={id}
              setList={setList}
              text={text}
              list={list}
            />
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default React.memo(ToDoRedux);