import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import logoutReducer from "./logoutReducer"
import registerReducer from "./registerReducer"


export default combineReducers({loginReducer,logoutReducer,registerReducer});
