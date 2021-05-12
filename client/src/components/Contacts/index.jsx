import React from 'react';
import { Card, Header, Title, Body } from './style';
import ContactItem from '../ContactItem';
import { contacts } from '../../data/home';

const Contacts = () => {
  return (
    <Card>
      <Header>
        <Title>Contacts</Title>
      </Header>
      <Body>
        {contacts.map((c) => (
          <ContactItem key={c.id} name={c.name} img={c.img} />
        ))}
      </Body>
    </Card>
  );
};

export default Contacts;
