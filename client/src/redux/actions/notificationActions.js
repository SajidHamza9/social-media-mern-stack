import { GET_NOTIFICATION, ADD_NOTIFICATION } from './types';

export const addNotif = (notification) => {
  return {
    type: ADD_NOTIFICATION,
    payload: {
      notification,
    },
  };
};

export const getNotif = () => {
  return {
    type: GET_NOTIFICATION,
  };
};
