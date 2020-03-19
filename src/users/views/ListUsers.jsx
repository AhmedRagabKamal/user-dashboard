import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
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
  return (
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  );
};

export default ListUsers;
