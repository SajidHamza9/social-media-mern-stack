import React from 'react';
import {
  Card,
  List as StyledList,
  ListItem as Item,
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
      <StyledList>
        <Item>
          <Bold>Hamza Sajid</Bold>
          <Light>Bio</Light>
        </Item>
        <Item>
          <Light>Friends</Light>
          <Bold>25</Bold>
        </Item>
        <Item>
          <Light>Posts</Light>
          <Bold>12</Bold>
        </Item>
        <Item>
          <Button>View Profile</Button>
        </Item>
      </StyledList>
    </Card>
  );
};

export default InfoCard;
