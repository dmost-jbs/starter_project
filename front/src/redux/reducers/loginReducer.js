import { LOGIN_USER } from "../actionTypes";

const initialState = {
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            const { username, password } = action.payload;
            return {
                ...state,
                'username':username,
                'password':password
            };
        }
        default: {
            return state;
        }
    }
};

export default login;
