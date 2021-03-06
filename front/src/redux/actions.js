import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const loginUser = (username, password) => ({
  type: LOGIN_USER,
  payload: {
    username,
    password,
  },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
