import React, { useEffect, useState } from 'react';
import { getUsers } from '../../core/users/services/users.service';
import BaseTable from '../../components/baseTable';
import BasePagination from '../../components/pagination';
import { Image } from 'semantic-ui-react';

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
    {
      name: 'Avatar',
      path: 'avatar',
      content: ({ avatar }) => <Image src={avatar} rounded size='mini' />
    }
  ];

  const handlePaginationChange = (e, { activePage }) => setPage(activePage);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const { users, page: activePage, perPage, totalPages } = await getUsers(
        page
      );
      setLoading(false);
      setUsers(users);
      setPage(activePage);
      setPerPage(perPage);
      setTotalPages(totalPages);
    };
    fetchUsers();
  }, [page]);
  return (
    <>
      <BaseTable columns={columns} data={users} />
      <BasePagination
        activePage={page}
        totalPages={totalPages}
        onPageChange={handlePaginationChange}
      />
    </>
  );
};

export default ListUsers;
