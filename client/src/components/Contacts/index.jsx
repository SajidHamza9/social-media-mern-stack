import React, { useEffect, useState } from 'react';
import { Card, Header, Title, Body } from './style';
import ContactItem from '../ContactItem';
// import { contacts } from '../../data/home';
import utils from '../../utils/socket'

const Contacts = () => {
const [contacts,setContacts]=useState([])
  useEffect(() => {
    utils.socket.on("loggedIn",data=>{
      setContacts(data);
    });
    
  },[contacts])
  return (
    <Card>
      <Header>
        <Title>Contacts</Title>
      </Header>
      <Body>
        {contacts.map((c) => (
          c._id !==utils.user._id && <ContactItem key={c._id} name={c.username} img={c.pdp} />
        ))}
      </Body>
    </Card>
  );
};

export default Contacts;
