import React from 'react';
import { Card, Header, Title, Body } from './style';
import { Button, ListItem } from '../InfoCard/style';
import { suggestions } from '../../data/home';
import UserItem from '../UserItem';
const Suggestions = () => {
  return (
    <Card>
      <Header>
        <Title>Suggestions</Title>
      </Header>
      <Body>
        {suggestions.map((s) => (
          <UserItem key={s.id} img={s.img} name={s.name} />
        ))}
      </Body>
      <ListItem>
        <Button>View All</Button>
      </ListItem>
    </Card>
  );
};

export default Suggestions;
