import React, { useReducer, useEffect, Fragment } from 'react';
import { toast } from 'react-toastify';
import { tableDataReducer } from '../reducers/tableDataReducer';
import BaseTable from './baseTable';
import BasePagination from '../components/pagination';

const Grid = ({ columns, apiService, paginate = true }) => {
  const initialState = {
    data: {
      data: [],
      page: 1,
      perPage: 6,
      totalPages: 1
    },
    loading: false,
    error: {}
  };

  if (!paginate) {
    initialState.data.perPage = 1000;
  }

  const [state, dispatch] = useReducer(tableDataReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'fetch' });
        const {
          data,
          page: activePage,
          perPage,
          totalPages
        } = await apiService(state.data.page, state.data.perPage);
        dispatch({
          type: 'success',
          data: { data, page: activePage, perPage, totalPages }
        });
      } catch (error) {
        dispatch({ type: 'error' }, error);
        toast.error('Something went wrong');
      }
    };
    fetchData();
  }, [apiService, state.data.page, state.data.perPage]);

  const handlePaginationChange = (e, { activePage }) => {
    dispatch({ type: 'setPage', page: activePage });
  };

  return (
    <Fragment>
      <BaseTable columns={columns} data={state.data.data} />
      {paginate && (
        <BasePagination
          activePage={state.data.page}
          totalPages={state.data.totalPages}
          onPageChange={handlePaginationChange}
        />
      )}
    </Fragment>
  );
};

export default Grid;
