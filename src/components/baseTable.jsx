import React from 'react';
import { Table, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import TableHeader from './tableHeader';
import TableBody from './tableBody.jsx';

const BaseTable = ({ columns, data, loading = false }) => {
  return (
    <Segment>
      <Dimmer active={loading} inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
      <Table singleLine>
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </Table>{' '}
    </Segment>
  );
};

export default BaseTable;
