import React, { useEffect, useReducer } from 'react';
import { getUsers } from '../../core/users/services/users.service';
import BaseTable from '../../components/baseTable';
import BasePagination from '../../components/pagination';
import { Image, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { usersReducer } from './../reducers/usersReducer';
import { toast } from 'react-toastify';
const initialState = {
  data: {
    users: [],
    page: 1,
    perPage: 6,
    totalPages: 1
  },
  loading: false,
  error: {}
};

const ListUsers = () => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
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

  const handlePaginationChange = (e, { activePage }) => {
    dispatch({ type: 'setPage', page: activePage });
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch({ type: 'fetch' });
        const { users, page: activePage, perPage, totalPages } = await getUsers(
          state.data.page
        );
        dispatch({
          type: 'success',
          data: { users, page: activePage, perPage, totalPages }
        });
      } catch (error) {
        dispatch({ type: 'error' }, error);
        toast.error('Something went wrong');
      }
    };
    fetchUsers();
  }, [state.data.page]);

  if (!state.data && !state.data.users) return null;

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
      <BaseTable columns={columns} data={state.data.users} />
      <BasePagination
        activePage={state.data.page}
        totalPages={state.data.totalPages}
        onPageChange={handlePaginationChange}
      />
    </>
  );
};

export default ListUsers;
