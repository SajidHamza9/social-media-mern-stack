import React from 'react';
import { Card, Title, Body } from './style';
import { Button } from '../InfoCard/style';
import { Header } from '../Photos/style';
import { suggestions } from '../../data/home';
import UserItem from '../UserItem';
const Suggestions = () => {
  return (
    <Card>
      <Header>
        <Title>Suggestions</Title>
        <Button>View All</Button>
      </Header>
      <Body>
        {suggestions.map((s) => (
          <UserItem key={s.id} img={s.img} name={s.name} />
        ))}
      </Body>
    </Card>
  );
};

export default Suggestions;
