import {
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS,
  DELETE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  REMOVE_LIKE,
  REMOVE_LIKE_SUCCESS,
  ADD_LIKE,
  ADD_LIKE_SUCCESS,
  UPDATE_LIKES_SOCKET,
  VIDER_POSTS,
} from './types';
import tokenConfig from '../helpers/tokenConfig';
import axios from 'axios';
import moment from 'moment';

export const loadHomePosts = (userId) => async (dispatch, getState) => {
  dispatch({ type: GET_POSTS_LOADING });
  const configHeader = tokenConfig(getState);
  try {
    const { data } = await axios.get(
      `/api/users/${userId}/posts?all=true`,
      configHeader,
    );
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: {
        posts: data,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const loadProfilePosts = (userId) => async (dispatch, getState) => {
  dispatch({ type: GET_POSTS_LOADING });
  const configHeader = tokenConfig(getState);
  try {
    const { data } = await axios.get(
      `/api/users/${userId}/posts?all=false`,
      configHeader,
    );
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: {
        posts: data,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const addPost = (post) => async (dispatch, getState) => {
  const configHeader = tokenConfig(getState);
  dispatch({
    type: ADD_POST,
  });
  try {
    const { data } = await axios.post(`/api/posts`, post, configHeader);
    console.log(data);
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: {
        post: data,
      },
    });
  } catch (error) {
    alert(error);
  }
};

export const deletePost = (postId) => async (dispatch, getState) => {
  const configHeader = tokenConfig(getState);
  try {
    await axios.delete(`/api/posts/${postId}`, configHeader);
    const posts = getState().post.posts.filter(
      (p) => p._id.toString() !== postId.toString(),
    );
    dispatch({
      type: DELETE_POST,
      payload: {
        posts,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const updatePost = (postId, caption) => async (dispatch, getState) => {
  const configHeader = tokenConfig(getState);
  try {
    const { data } = await axios.put(
      `/api/posts/${postId}`,
      { caption },
      configHeader,
    );
    const posts = getState().post.posts;
    const index = posts.findIndex(
      (p) => p._id.toString() === postId.toString(),
    );
    posts[index].caption = data.caption;
    dispatch({
      type: UPDATE_POST,
      payload: {
        posts,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const addComment = (postId, comment) => async (dispatch, getState) => {
  const configHeader = tokenConfig(getState);
  dispatch({
    type: ADD_COMMENT,
  });

  try {
    const { data } = await axios.post(
      `/api/posts/${postId}/comments`,
      { comment },
      configHeader,
    );
    const { comments } = data;
    const posts = getState().post.posts;
    const index = posts.findIndex(
      (p) => p._id.toString() === postId.toString(),
    );
    posts[index].comments = comments.sort((c1, c2) => {
      return moment(c2.createdAt).diff(c1.createdAt);
    });
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: {
        posts: posts,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const updateComment =
  (postId, commentId, comment) => async (dispatch, getState) => {
    const configHeader = tokenConfig(getState);
    try {
      const { data } = await axios.put(
        `/api/posts/${postId}/comments/${commentId}`,
        { comment },
        configHeader,
      );
      const { comments } = data.post;
      const posts = getState().post.posts;
      const index = posts.findIndex(
        (p) => p._id.toString() === postId.toString(),
      );
      posts[index].comments = comments;
      dispatch({
        type: UPDATE_COMMENT,
        payload: {
          posts: posts,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

export const deleteComment =
  (postId, commentId) => async (dispatch, getState) => {
    const configHeader = tokenConfig(getState);
    try {
      await axios.delete(
        `/api/posts/${postId}/comments/${commentId}`,
        configHeader,
      );

      const posts = getState().post.posts;
      const index = posts.findIndex(
        (p) => p._id.toString() === postId.toString(),
      );
      posts[index].comments = posts[index].comments.filter(
        (c) => c._id.toString() !== commentId.toString(),
      );
      dispatch({
        type: DELETE_COMMENT,
        payload: {
          posts: posts,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

export const addLike = (postId) => async (dispatch, getState) => {
  const configHeader = tokenConfig(getState);
  dispatch({
    type: ADD_LIKE,
  });
  try {
    const { data } = await axios.post(
      `/api/posts/${postId}/likes`,
      null,
      configHeader,
    );
    const { likes } = data.post;
    const posts = getState().post.posts;
    const index = posts.findIndex(
      (p) => p._id.toString() === postId.toString(),
    );
    posts[index].likes = likes;
    posts[index].isLiked = true;
    dispatch({
      type: ADD_LIKE_SUCCESS,
      payload: {
        posts: posts,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const removeLike = (postId) => async (dispatch, getState) => {
  const configHeader = tokenConfig(getState);
  dispatch({
    type: REMOVE_LIKE,
  });
  try {
    const { data } = await axios.delete(
      `/api/posts/${postId}/likes`,
      configHeader,
    );
    const posts = getState().post.posts;
    const { likes } = data.post;
    const index = posts.findIndex(
      (p) => p._id.toString() === postId.toString(),
    );
    posts[index].likes = likes;
    posts[index].isLiked = false;

    dispatch({
      type: REMOVE_LIKE_SUCCESS,
      payload: {
        posts: posts,
      },
    });
  } catch (error) {
    alert(error.message);
  }
};

export const updateLikesSocket =
  (postId, likes) => async (dispatch, getState) => {
    const posts = getState().post.posts;
    const index = posts.findIndex(
      (p) => p._id.toString() === postId.toString(),
    );
    posts[index].likes = likes;
    dispatch({
      type: UPDATE_LIKES_SOCKET,
      payload: {
        posts,
      },
    });
  };

export const updateCommentsSocket =
  (postId, comments) => async (dispatch, getState) => {
    const posts = getState().post.posts;
    const index = posts.findIndex(
      (p) => p._id.toString() === postId.toString(),
    );
    posts[index].comments = comments;
    dispatch({
      type: UPDATE_LIKES_SOCKET,
      payload: {
        posts,
      },
    });
  };
