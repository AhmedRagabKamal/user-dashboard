import React, { useEffect, useState } from 'react';
import { getUsers } from '../../core/users/services/users.service';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return <div>{JSON.stringify(users)}</div>;
};

export default ListUsers;
