import React, { useState } from 'react'
import { createUsersApi } from '../../service/API/users';
import { postUserAdapter } from "../../service/adapters/userAdapter";

import style from "./style.module.scss"


const INITIAL_STATE = {
  name: "",
  surname: "",
  age: "",
  city: "",
  street: "",
  suite: "",
};


function Form({ onSubmit }) {
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
    <div className={style.formWrapper}>
      <div className={style.container}>
        <form onSubmit={handleClick}>
          <label>
            <input
              name="name"
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
            <div className={style.labelText}>Name</div>
          </label>
          <label>
            <input
              name="surname"
              id="surname"
              type="text"
              value={form.surname}
              onChange={handleChange}
              required
            />
            <div className={style.labelText}>Surname</div>
          </label>
          <label>
            <input
              type="text"
              name="age"
              id="age"
              value={form.age}
              onChange={handleChange}
              required
            />
            <div className={style.labelText}>Age</div>
          </label>
          <label>
            <input
              type="text"
              name="city"
              id="city"
              value={form.city}
              onChange={handleChange}
              required
            />
            <div className={style.labelText}>City</div>
          </label>
          <label>
            <input
              type="text"
              name="street"
              id="street"
              value={form.street}
              onChange={handleChange}
              required
            />
            <div className={style.labelText}>Street</div>
          </label>
          <label>
            <input
              type="text"
              name="suite"
              id="suite"
              value={form.suite}
              onChange={handleChange}
              required
            />
            <div className={style.labelText}>Suite</div>
          </label>
          <button type="submit" value="Submit" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(Form);