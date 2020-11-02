import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "./actionTypes";

export const loginUser = (username,password) => ({
  type: LOGIN_USER,
  payload: {
    'username':username,
    'password':password
  }
});

export const registerUser = (username,password,email) => ({
  type: REGISTER_USER,
  payload: { 
      'username':username,
      'password':password,
      'email':email
   }
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

