import React from 'react';
import { Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../core/users/services/users.service';
import Grid from '../../components/grid';

const ListUsers = () => {
  const columns = [
    { name: 'First name', path: 'firstName' },
    { name: 'Last name', path: 'lastName' },
    { name: 'Email', path: 'email' },
    {
      name: 'Avatar',
      path: 'avatar',
      content: ({ avatar }) => <Image src={avatar} rounded size='mini' />
    }
  ];

  return (
    <>
      <div className='flex space-between'>
        <h1>Users</h1>
        <Button
          as={Link}
          to='/users/create'
          floated='right'
          icon
          labelPosition='left'
          primary
          size='small'
        >
          <Icon name='user' /> Add User
        </Button>
      </div>
      <Grid columns={columns} apiService={getUsers} />
    </>
  );
};

export default ListUsers;
