import { POSTS_LOADING, POSTS_SUCCESS } from './types';
import tokenConfig from '../helpers/tokenConfig';
import axios from 'axios';

export const loadHomePosts = (userId) => async (dispatch, getState) => {
  dispatch({ type: POSTS_LOADING });
  const configHeader = tokenConfig(getState);
  try {
    const { data } = await axios.get(
      `/api/users/${userId}/posts?all=true`,
      configHeader,
    );
    dispatch({
      type: POSTS_SUCCESS,
      payload: {
        posts: data,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const loadProfilePosts = (userId) => async (dispatch, getState) => {
  dispatch({ type: POSTS_LOADING });
  const configHeader = tokenConfig(getState);
  try {
    const { data } = await axios.get(
      `/api/users/${userId}/posts?all=false`,
      configHeader,
    );
    dispatch({
      type: POSTS_SUCCESS,
      payload: {
        posts: data,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};
