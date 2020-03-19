export function usersReducer(state, action) {
  switch (action.type) {
    case 'fetch':
      return {
        ...state,
        loading: true
      };
    case 'success':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'setPage':
      return {
        ...state,
        data: {
          ...state.data,
          page: action.page
        }
      };
    default:
      throw new Error('Action type not exist');
  }
}
