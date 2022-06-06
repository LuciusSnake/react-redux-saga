import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

import CustomForm from '../../components/Form';
import CustomTable from '../../components/Table';
import CustomModal from "../../components/Modal";

import { createUsersApi, getUsersApi } from '../../service/API/users';
import { postUserAdapter } from "../../service/adapters/userAdapter";

import style from './style.module.scss'



const Users = () => {
  const [ users, setUsers ] = useState([]);
  const [ isShow, setShow ] = useState(false);

  const toggleModal = () => setShow(prev => !prev);

  const handleSave = (form) => (event) => {
    event.preventDefault();

    const { name, surname, age, city, street, suite } = form;

    if (!name || !surname || !age || !city || !street || !suite) return;

    createUsersApi(postUserAdapter(form)).then((data) => {
      setUsers((prev) => [...prev, data]);
      toggleModal();
    });
  };

  useEffect(() => {
    getUsersApi().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className={style.div}>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={toggleModal}>
          Add User
        </Button>
      </div>

      <CustomModal isShow={isShow} onClose={toggleModal} title={"Add user"}>
        <CustomForm onSubmit={handleSave} />
      </CustomModal>

      <CustomTable users={users} />
    </div>
  );
};

export default React.memo(Users);