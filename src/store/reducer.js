export const initialState = {
  user: null,
  repos: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case 'INIT_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
