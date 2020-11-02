import { REGISTER_USER } from "../actionTypes";

const initialState = {
};

const register = (state = initialState, action) => {
    console.log("TEST");
    switch (action.type) {
        case REGISTER_USER: {
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

export default register;
