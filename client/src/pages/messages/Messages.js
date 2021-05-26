import React, { useState, useEffect } from 'react';
import './messages.css';
import SideBar from '../../components/msgsComponents/Sidebar';
import Conversation from '../../components/msgsComponents/Conversation';
import { useLocation } from 'react-router';
import axios from 'axios';

const Messages = () => {
  // if i click on a connected person
  const location = useLocation();
  const { pers } = location;
  // cons[(updateSidebar, setUpdateSidebar)] = useState(false);
  const [person, setPerson] = useState(pers);
  const selectConv = (user, convId) => {
    user.convId = convId;
    setPerson(user);
  };
  const orderSidebar = () => {};

  return (
    <div className='msg-page'>
      <div className='msg-container '>
        <SideBar onClick={selectConv} />
        {person && <Conversation {...person} />}
      </div>
    </div>
  );
};

export default Messages;
