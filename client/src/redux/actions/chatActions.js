import {
  GET_ALL_CONVERSATIONS,
  GET_ALL_CONVERSATIONS_SUCCESS,
  GET_ALL_CONVERSATIONS_FAILED,
  GET_ALL_MESSAGES,
  GET_ALL_MESSAGES_SUCCESS,
  GET_ALL_MESSAGES_FAILED,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  UPDATE_MSGS,
} from "./types";
import axios from "axios";
import utils from "../../utils/socket";

export const getConversations = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CONVERSATIONS });
    const { data } = await axios.get(`/conversations/${utils?.user}`);
    dispatch({ type: GET_ALL_CONVERSATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_CONVERSATIONS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getMessages = (convId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_MESSAGES });
    const { data } = await axios.get(`/messages/${convId}`);
    dispatch({ type: GET_ALL_MESSAGES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_MESSAGES_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const sendMessage = (convId, message, _id) => async (dispatch) => {
  try {
    dispatch({ type: SEND_MESSAGE, payload: message });
    utils.socket.emit("message", {
      sender: utils.user,
      receiver: _id,
      text: message,
    });
    await axios.post(`/messages`, {
      conversationId: convId,
      sender: utils.user,
      text: message,
    });
    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: { text: message, sender: utils.user },
    });
  } catch (error) {
    dispatch({
      type: SEND_MESSAGE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateMsgs = (message) => async (dispatch) => {
  dispatch({ type: UPDATE_MSGS, payload: message });
};
