import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import { loginReducer } from './loginReducer';
import modalReducer from './modalReducer';
import postReducer from './postReducer';
import notificationReducer from './notificationReducer';
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  errorsAuth: errorReducer,
  modal: modalReducer,
  post: postReducer,
  notification: notificationReducer,
  loginReducer,
  userProfile: profileReducer
});
