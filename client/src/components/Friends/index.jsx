import React from 'react';
import { Card, Title, Body } from './style';
import { Header } from '../Photos/style';
import { Button, ListItem } from '../InfoCard/style';
import { suggestions } from '../../data/home';
import { useHistory } from 'react-router-dom';
import UserItem from '../UserItem';
const Friends = ({ title, to, list }) => {
  const history = useHistory();
  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <Button
          onClick={(e) => {
            history.push(to);
          }}>
          View All
        </Button>
      </Header>
      <Body>
        {list?.map((s) => (
          <UserItem
            key={s.userId}
            img={s.pdp}
            name={s.username}
            status={s.isFollow}
            userId={s.userId}
          />
        ))}
      </Body>
    </Card>
  );
};

export default Friends;
