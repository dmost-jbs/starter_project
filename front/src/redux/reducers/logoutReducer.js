import { LOGOUT_USER } from "../actionTypes";

const initialState = {
};

const logout = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER: {
            return {
                ...state,
                'username':undefined,
                'password':undefined,
            };
        }
        default: {
            return state;
        }
    }
};

export default logout;
