import React, { useState, useMemo } from 'react'
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
        [name]: event.target.type === "number" ? Math.abs(value) : value,
    }))
  }

  const rows = useMemo(
    () => [
      {
        className: "mb-3",
        fields: [
          {
            id: "formGridName",
            label: "Name",
            control: {
              name: "name",
              value: form.name,
              placeholder: "Enter your firstname",
            },
          },
          {
            id: "formGridSurname",
            label: "Name",
            control: {
              name: "surname",
              value: form.surname,
              placeholder: "Enter your Surname",
            },
          },
        ],
      },
      {
        className: "mb-3",
        fields: [
          {
            id: "formGridAge",
            label: "Age",
            control: {
              name: "age",
              value: form.age,
              placeholder: "Enter your age",
              type: "number",
              min: 0,
            },
          },
        ],
      },
      {
        className: "mb-3",
        fields: [
          {
            id: "formGridCity",
            label: "City",
            control: {
              name: "city",
              value: form.city,
              placeholder: "Enter your city",
            },
          },
          {
            id: "formGridStreet",
            label: "Street",
            control: {
              name: "street",
              value: form.street,
              placeholder: "Enter your street",
            },
          },
          {
            id: "formGridSuite",
            label: "Suite",
            control: {
              name: "suite",
              value: form.suite,
              placeholder: "Enter your suite",
            },
          },
        ],
      },
    ],
    [form.suite, form.street, form.city, form.age, form.surname, form.name]
  );

  return (
    <Form onSubmit={onSubmit(form)}>
      {rows.map((row, index) => (
        <Row key={index} className={row.className}>
          {row.fields.map(({ id, label, control }) => (
            <Form.Group key={id} as={Col} controlId={id}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                required
                {...control}
              />
            </Form.Group>
          ))}
        </Row>
      ))}

      {/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            placeholder="Enter your firstname"
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
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
          min="0"
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
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
            value={form.suite}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row> */}

      <Button
        variant="primary"
        type="submit"
        value="Submit"
        onClick={onSubmit(form)}
      >
        Submit
      </Button>
    </Form>
  );
}

export default React.memo(CustomForm);