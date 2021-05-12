import React from 'react';
import { Card, Header, Title, Body } from './style';
import { Button, ListItem } from '../InfoCard/style';
import { suggestions } from '../../data/home';
import SuggestionItem from '../SuggestionItem';
const Friends = () => {
  return (
    <Card>
      <Header>
        <Title>Friends</Title>
      </Header>
      <Body>
        {suggestions.map((s) => (
          <SuggestionItem key={s.id} img={s.img} name={s.name} />
        ))}
      </Body>
      <ListItem>
        <Button>View All</Button>
      </ListItem>
    </Card>
  );
};

export default Friends;
