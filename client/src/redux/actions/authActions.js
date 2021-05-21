import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGING_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  IS_AUTH,
} from './types';
import { returnErrors } from './errorsActions';
import { history } from '../helpers/history';
import axios from 'axios';
export const loadUser = () => (dispatch, getState) => {
  // loading user
  dispatch({ type: USER_LOADING });

  //config headers
  const configHeader = tokenConfig(getState);

  axios
    .get('/api/users/auth', configHeader)
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      }),
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

// register User
export const register = (user) => (dispatch) => {
  axios
    .post('/api/users', user)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAIL });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//login
export const login = (user) => (dispatch) => {
  console.log('inside logien');
  axios
    .post('/api/users/login', user)
    .then((res) => {
      console.log('THEN');
      dispatch({
        type: LOGING_SUCCESS,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });

      //  history.push("/profile");
      //window.location.reload();
    })
    .catch((err) => {
      console.log('CATCH');
      dispatch({ type: LOGIN_FAIL });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  //config headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (token) config.headers['auth-token'] = token;
  return config;
};

export const isAuth = () => (dispatch) => {
  dispatch({ type: IS_AUTH });
};
