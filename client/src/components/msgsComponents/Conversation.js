import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ScrollableFeed from "react-scrollable-feed";
import Msg from "./Msg";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import msges from "../../pages/messages/msgs";

const Conversation = ({ name, image }) => {
  const [message, setMessage] = useState("");
  const [msgs, setMsgs] = useState(msges);
  const sendMessage = () => {
    console.log(message);
    setMsgs([...msgs, { message, sender: "me" }]);
    console.log(msgs);
    setMessage("");
  };
  return (
    <div className="conversation">
      <div className="conversation-header ">
        <div className="user">
          <Avatar src={image} />
          <h6>{name}</h6>
        </div>
        <p>Online</p>
      </div>
      <ScrollableFeed className="conversation-msgs">
        {msgs?.map((mg, i) => (
          <Msg key={i} image={image} msg={mg} />
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
