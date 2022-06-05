import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

import CustomForm from '../../components/Form';
import CustomTable from '../../components/Table';
import CustomModal from "../../components/Modal";

import { getUsersApi } from '../../service/API/users';

import style from './style.module.scss'

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
    <div className={style.div}>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={toggleModal}>
          Add User
        </Button>
      </div>

      <CustomModal isShow={isShow} onClose={toggleModal} title={"Add user"}>
        <CustomForm onSubmit={setUsers} />
      </CustomModal>

      <CustomTable users={users} />
    </div>
  );
};

export default React.memo(Users);