import React, { useState } from 'react'
import { createUsersApi } from '../../service/API/users';
import { postUserAdapter } from "../../service/adapters/userAdapter";
import { Col, Form, Row, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// import style from "./style.module.scss"


const INITIAL_STATE = {
  name: "",
  surname: "",
  age: "",
  city: "",
  street: "",
  suite: "",
};


function CustomForm({ onSubmit }) {
  const [form, setForm] = useState(INITIAL_STATE);
    
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm((prevState) => ({
        ...prevState,
        [name]: value,
    }))
  }

  const handleClick = (event) => {
    event.preventDefault();

    const {name, surname, age, city, street, suite} = form;

    if (!name || !surname || !age || !city || !street || !suite) return;

      createUsersApi(postUserAdapter(form)).then((data) => {
        onSubmit((prev) => [...prev, data]);
      });
  }

  return (
    <Form onSubmit={handleClick}>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>
            Name
          </Form.Label>
          <Form.Control
            name="name"
            placeholder='Enter your firstname'
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required          
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control 
            name="surname"
            id="surname"
            type="text"
            value={form.surname}
            onChange={handleChange}
            placeholder="Enter your Surname"
            required
           />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAge">
        <Form.Label>Age</Form.Label>
        <Form.Control 
          type="text"
          name="age"
          id="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
         />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text"
            name="city"
            id="city"
            value={form.city}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control 
            type="text"
            name="street"
            id="street"
            value={form.street}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSuite">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text"
            name="suite"
            id="suite"
            value={form.suite}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" value="Submit" onClick={handleClick}>
        Submit
      </Button>

    </Form>
  );
}

export default React.memo(CustomForm);