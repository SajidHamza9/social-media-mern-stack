import React, { useState, useEffect } from "react";
import "./messages.css";
import SideBar from "../../components/msgsComponents/Sidebar";
import Conversation from "../../components/msgsComponents/Conversation";
import data from "../../pages/messages/data";

const Messages = () => {
  const [person, setPerson] = useState();
  useEffect(() => {
    // grab with who this person was talking
  });
  const selectConv = (cnv) => {
    // grab messages with this person

    setPerson(cnv);
  };
  return (
    <div className="msg-page">
      <div className="msg-container ">
        <SideBar onClick={selectConv} data={data} />
        {person && <Conversation {...person} />}
      </div>
    </div>
  );
};

export default Messages;
