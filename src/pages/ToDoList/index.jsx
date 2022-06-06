import React from 'react'
import { useState } from 'react';
import { InputGroup, FormControl, Button, ListGroup, } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import style from './style.module.scss'

function ToDo() {
  const [ text, setText ] = useState('')
  const [ list, setList ] = useState([])

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
    

  const handleRemove = (id) => () => {
    setList(prevState => prevState.filter((element) => element.id !== id))
  } 

  return (
    <div>
      <div className={style.input__wrapper}>
        <InputGroup className="mb-3">
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
        {/* { Array.length (&& ||) <p>ToDO List is Empty</p>} */}
        <ListGroup as="ol" numbered>
          {list.map(({ id, text }) => {
            return (
              <ListGroup.Item
                key={id}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">{text}</div>
                <Button variant="danger" onClick={handleRemove(id)}>
                  Remove
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}

export default React.memo(ToDo)