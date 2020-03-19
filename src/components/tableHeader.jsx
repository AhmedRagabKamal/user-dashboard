import React from 'react';
import { Table } from 'semantic-ui-react';

const TableHeader = ({ columns }) => {
  return (
    <Table.Header>
      <Table.Row>
        {columns.map(column => (
          <Table.HeaderCell key={column.path || column.key}>
            {column.name}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
};

export default TableHeader;
