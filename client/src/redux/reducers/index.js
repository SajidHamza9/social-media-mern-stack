import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import { loginReducer } from './loginReducer';
import modalReducer from './modalReducer';
import postReducer from './postReducer';

export default combineReducers({
  auth: authReducer,
  errorsAuth: errorReducer,
  modal: modalReducer,
  post: postReducer,
  loginReducer,
});
