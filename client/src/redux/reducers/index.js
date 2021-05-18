import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { loginReducer } from "./loginReducer";

export default combineReducers({
  auth: authReducer,
  errorsAuth: errorReducer,
  loginReducer,
});
