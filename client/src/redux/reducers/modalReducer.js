import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';
const modalReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return !state;
    case CLOSE_MODAL:
      return !state;
    default:
      return state;
  }
};

export default modalReducer;
