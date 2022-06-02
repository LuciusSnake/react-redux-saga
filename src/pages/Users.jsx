import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

import Form from '../components/Form';
import Table from '../components/Table';
import CustomModal from "../components/Modal";

import { getUsersApi } from '../service/API/users';


const Users = () => {
  const [ users, setUsers ] = useState([]);
  const [ isShow, setShow ] = useState(false);

  const toggleModal = _ => setShow(prev => !prev);

  useEffect(() => {
    getUsersApi().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <Button onClick={toggleModal}>Add User</Button>

      <CustomModal isShow={isShow} onClose={toggleModal} title={"Add user"}>
        <Form onSubmit={setUsers} />
      </CustomModal>

      <Table users={users} />
    </div>
  );
};

export default React.memo(Users);