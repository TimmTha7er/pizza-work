const initialState = {
  token: localStorage.getItem('token'),
  authenticated: null,
  loading: false,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  if (action.type === 'USER_REQUESTED') {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === 'USER_LOADED') {
    const user = action.payload;

    return {
      ...state,
      authenticated: true,
      loading: false,
      error: null,
      user: user,
    };
  }

  if (action.type === 'LOGIN_SUCCESS' || action.type === 'REGISTER_SUCCEESS') {
    localStorage.setItem('token', action.payload.token);

    return {
      ...state,
      ...action.payload,
      authenticated: true,
      loading: false,
    };
  }

  if (
    action.type === 'USER_ERROR' ||
    action.type === 'LOGIN_FAIL' ||
    action.type === 'LOGOUT_SUCCESS' ||
    action.type === 'REGISTER_FAIL'
  ) {
    localStorage.removeItem('token');
    return {
      ...state,
      token: null,
      user: null,
      authenticated: false,
      loading: false,
    };
  }

  return state;
};

export default authReducer;
