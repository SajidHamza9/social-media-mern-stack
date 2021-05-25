import React from 'react';
import { Card, Header, Title, Body } from './style';
import { Button, ListItem } from '../InfoCard/style';
import { suggestions } from '../../data/home';
import UserItem from '../UserItem';
const Friends = () => {
  return (
    <Card>
      <Header>
        <Title>Following</Title>
      </Header>
      <Body>
        {suggestions.map((s) => (
          <UserItem key={s.id} img={s.img} name={s.name} />
        ))}
      </Body>
      <ListItem>
        <Button href='/friends'>View All</Button>
      </ListItem>
    </Card>
  );
};

export default Friends;
