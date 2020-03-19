export function usersReducer(state, action) {
  if (action.type === 'fetch') {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === 'success') {
    return {
      loading: false,
      data: action.data,
      error: null
    };
  } else if (action.type === 'error') {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === 'setPage') {
    return {
      ...state,
      data: {
        ...state.data,
        page: action.page
      }
    };
  } else {
    throw new Error('Action type not exist');
  }
}
