import { GET_USER_PROFILE } from './types';


import axios from 'axios';
import { returnErrors } from '../actions/errorsActions';
import tokenConfig from '../helpers/tokenConfig';


export const getUser = (userId) => (dispatch, getState) => {
    // config headers
    const configHeader = tokenConfig(getState);

    axios.get(`/api/users/${userId}`, configHeader)
         .then(res => {
             dispatch({
                 type: GET_USER_PROFILE,
                 payload: res.data
             }); 
         })
         .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
         })
}