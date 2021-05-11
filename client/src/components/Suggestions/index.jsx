import React from 'react';
import { Card, Header, Title, Body } from './style';
import { Button, ListItem } from '../InfoCard/style';
import { suggestions } from '../../data/home';
import SuggestionItem from '../SuggestionItem';
const Suggestions = () => {
  return (
    <Card>
      <Header>
        <Title>Suggestions</Title>
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

export default Suggestions;
