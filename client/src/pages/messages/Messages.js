import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import io from "socket.io-client";
import "./messages.css";
import SideBar from "../../components/msgsComponents/Sidebar";
import Conversation from "../../components/msgsComponents/Conversation";
import data from "../../pages/messages/data";

const Messages = () => {
  const [person, setPerson] = useState();
  // const auth = useSelector((state) => state.auth?.user?._id);
  // console.log(auth);
  useEffect(() => {
    // const socket = io();
    // console.log(auth);
    // socket.emit("identity", auth);
    // socket.emit("chat", { message: "weee" });
    // socket.on("chat", (data) => {
    //   console.log(data);
    // });
    // return () => {
    //   socket.disconnect();
    // };
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
