import React from 'react';
import { get } from 'lodash-es';
import { Table } from 'semantic-ui-react';

const TableBody = ({ columns, data }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return get(item, column.path);
  };

  const createKey = (item, column) => {
    return `${item.id}-${column.path}`;
  };

  return (
    <Table.Body>
      {data.map(item => (
        <Table.Row key={item.id}>
          {columns.map(column => (
            <Table.Cell key={createKey(item, column)}>
              {renderCell(item, column)}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default TableBody;
