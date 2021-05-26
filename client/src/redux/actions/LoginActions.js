import {
  REQUEST_LOGGED_IN_SUCCESS,
  REQUEST_LOGGED_IN_FAILED,
} from '../actions/types';

import utils from '../../utils/socket';

export const getloggedIn = () => async (dispatch) => {
  utils.socket.on('loggedIn', (data) => {
    data
      ? dispatch({ type: REQUEST_LOGGED_IN_SUCCESS, payload: data })
      : dispatch({
          type: REQUEST_LOGGED_IN_FAILED,
          payload: 'error fetching logged in users',
        });
  });
};
