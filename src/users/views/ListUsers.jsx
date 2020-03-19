import React, { useEffect, useState } from 'react';
import { getUsers } from '../../core/users/services/users.service';
import BaseTable from '../../components/baseTable';
import { Pagination } from 'semantic-ui-react';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);

  const columns = [
    { name: 'First name', path: 'firstName' },
    { name: 'Last name', path: 'lastName' },
    { name: 'Email', path: 'email' },
    { name: 'Avatar', path: 'avatar' }
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const { users, page, perPage, totalPages } = await getUsers();
      setLoading(false);
      setUsers(users);
      setPage(page);
      setPerPage(perPage);
      setTotalPages(totalPages);
    };
    fetchUsers();
  }, []);
  return <BaseTable columns={columns} data={users} />;
};

export default ListUsers;
