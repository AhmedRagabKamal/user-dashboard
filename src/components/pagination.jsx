import React from 'react';
import { Pagination } from 'semantic-ui-react';

const BasePagination = ({ activePage, onPageChange, totalPages }) => {
  return (
    <Pagination
      activePage={activePage}
      onPageChange={onPageChange}
      totalPages={totalPages}
    />
  );
};

export default BasePagination;
