import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import Table from '../components/Table';
import { getUsers } from '../service/API/users';


const Users = () => {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
        <Form />
        <Table users={users} />
    </div>
  )
};

export default React.memo(Users);