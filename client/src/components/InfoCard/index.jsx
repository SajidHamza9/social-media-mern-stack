import React from 'react';
import {
  Card,
  List,
  ListItem,
  Header,
  StyledAvatar,
  Bold,
  Light,
  Button,
} from './style';

const InfoCard = () => {
  return (
    <Card>
      <Header>
        <StyledAvatar src='/images/img2.jpeg' />
      </Header>
      <List>
        <ListItem>
          <Bold>Hamza Sajid</Bold>
          <Light>Bio</Light>
        </ListItem>
        <ListItem>
          <Light>Friends</Light>
          <Bold>25</Bold>
        </ListItem>
        <ListItem>
          <Light>Posts</Light>
          <Bold>12</Bold>
        </ListItem>
        <ListItem>
          <Button>View Profile</Button>
        </ListItem>
      </List>
    </Card>
  );
};

export default InfoCard;
