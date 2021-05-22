import React, { useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ScrollableFeed from "react-scrollable-feed";
import Msg from "./Msg";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import utils from "../../utils/socket";
import axios from "axios";
import Badge from "@material-ui/core/Badge";

const Conversation = ({ _id, username, pdp, status, convId }) => {
  const [message, setMessage] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [newOne, setNewOne] = useState(null);
  const sendMessage = async () => {
    await axios.post(`/messages`, {
      conversationId: convId,
      sender: utils.user,
      text: message,
    });
    console.log("save message");
    setMsgs([...msgs, { text: message, sender: utils.user }]);
    utils.socket.emit("message", {
      sender: utils.user,
      receiver: _id,
      text: message,
    });
    setMessage("");
  };

  // getMessages
  useEffect(() => {
    const getMessages = async () => {
      const { data } = await axios.get(`/messages/${convId}`);
      console.log("get all msgs");
      setMsgs(data);
    };
    getMessages();
  }, []);

  useEffect(() => {
    utils.socket.on("message", (payload) => {
      console.log("get message from socket");
      setNewOne(payload.message);
    });
  }, []);
  useEffect(() => {
    newOne && setMsgs([...msgs, newOne]);
    setNewOne(null);
  }, [newOne]);

  return (
    <div className="conversation">
      <div className="conversation-header ">
        <div className="user">
          <Avatar src={pdp} />
          <h6>{username}</h6>
        </div>
        <p>{status === true ? "Online" : "Offline"}</p>
      </div>
      <ScrollableFeed className="conversation-msgs">
        {msgs?.map((mg, i) => (
          <Msg
            key={mg._id || i}
            image={pdp}
            msg={mg.text}
            sended={mg.sender === utils.user}
          />
        ))}
      </ScrollableFeed>
      <div className="conversation-send">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          rows="1"
          placeholder="write your message"
        />
        <IconButton onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Conversation;
