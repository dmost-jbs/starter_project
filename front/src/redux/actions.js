import { * } from "./actionTypes";

let nextTodoId = 0;

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

export const logoutUser = (username) => ({
    type: LOGOUT_USER,
    payload: { 
        'username':username,
     }
  });

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
