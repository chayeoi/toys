export const initialState = {
  user: null,
  repos: null,
  loading: false,
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
      };
    case 'INIT_USER':
      return {
        ...state,
        user: null,
      };
    case 'FETCH_REPOS_BY_USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_REPOS_BY_USER_SUCCESS':
      return {
        ...state,
        repos: action.payload.repos,
      };
    default:
      return state;
  }
};

export default reducer;
