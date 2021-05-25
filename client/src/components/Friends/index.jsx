import React from 'react';
import { Card, Title, Body } from './style';
import { Header } from '../Photos/style';
import { Button, ListItem } from '../InfoCard/style';
import { suggestions } from '../../data/home';
import UserItem from '../UserItem';
const Friends = ({ title, to, list }) => {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <Button href={to}>View All</Button>
      </Header>
      <Body>
        {suggestions.map((s) => (
          <UserItem key={s.id} img={s.img} name={s.name} />
        ))}
      </Body>
    </Card>
  );
};

export default Friends;
