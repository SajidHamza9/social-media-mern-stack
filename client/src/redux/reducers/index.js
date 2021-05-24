import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { loginReducer } from "./loginReducer";
import profileReducer from "./profileReducer"; 
export default combineReducers({
  auth: authReducer,
  errorsAuth: errorReducer,
  loginReducer,
  userProfile: profileReducer
});
