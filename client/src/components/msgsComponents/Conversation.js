import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import Msg from "./Msg";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";

const Conversation = ({ name, image, msgs }) => {
  const [message, setMessage] = useState("");
  console.log(image);
  return (
    <div className="conversation">
      <div className="conversation-header ">
        <div className="user">
          <Avatar src={image} />
          <h6>{name}</h6>
        </div>
        <p>Online</p>
      </div>
      <div className="conversation-msgs">
        {msgs?.map((mg, i) => (
          <Msg key={i} image={image} msg={mg} />
        ))}
      </div>
      <div className="conversation-send">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          rows="1"
          placeholder="write your message"
        />
        <IconButton onClick={() => console.log("msg : " + message)}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Conversation;
