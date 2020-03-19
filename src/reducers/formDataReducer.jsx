export function formDataReducer(state, action) {
  switch (action.type) {
    case 'post':
      return {
        ...state,
        loading: true
      };
    case 'success':
      return {
        loading: false,
        data: action.data,
        errors: {}
      };
    case 'error':
      return {
        ...state,
        loading: false,
        errors: action.error
      };
    case 'handleChange':
      return {
        ...state,
        data: action.data,
        errors: action.errors
      };
    case 'formInvalid':
      return {
        ...state,
        errors: action.errors
      };
    case 'reset':
      return {
        ...state,
        data: action.data
      };
    case 'stopLoading':
      return {
        ...state,
        loading: false
      };
    default:
      throw new Error('Action type not exist');
  }
}
