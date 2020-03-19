import React from 'react';
import { Table } from 'semantic-ui-react';
import TableHeader from './tableHeader';
import TableBody from './tableBody.jsx';

const BaseTable = ({ columns, data }) => {
  return (
    <Table singleLine>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </Table>
  );
};

export default BaseTable;
