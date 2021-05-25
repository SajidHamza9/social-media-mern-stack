import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS } from './types';

import axios from 'axios';
import { returnErrors } from '../actions/errorsActions';
import tokenConfig from '../helpers/tokenConfig';

export const getUser = (userId) => (dispatch, getState) => {
  // config headers
  const configHeader = tokenConfig(getState);
  dispatch({
    type: GET_USER_PROFILE,
    payload: {
      _id: userId,
    },
  });
  axios
    .get(`/api/users/${userId}`, configHeader)
    .then((res) => {
      dispatch({
        type: GET_USER_PROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
