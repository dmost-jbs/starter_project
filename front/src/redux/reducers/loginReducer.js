import { LOGIN_USER, LOGOUT_USER } from "../actionTypes";

const initialState = {
    username:undefined,
    password:undefined,
    loggedIn:false
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            const { username, password } = action.payload;
            return {
                ...state,
                'username':username,
                'password':password,
                'loggedIn':true
            };
        }
        case LOGOUT_USER: {
            return {
                'username': undefined,
                'password': undefined,
                'loggedIn': false
            }
        }
        default: 
            return state;
    }
};

export default login;
