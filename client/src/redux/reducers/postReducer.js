import { POSTS_LOADING, POSTS_SUCCESS } from '../actions/types';

const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return { ...state, loading: true };
    case POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload.posts };
    default:
      return state;
  }
};

export default postReducer;
