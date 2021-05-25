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
import { useSelector, useDispatch } from 'react-redux';

const InfoCard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Card>
      <Header>
        <StyledAvatar src='/images/img2.jpeg' />
      </Header>
      <StyledList>
        <Item>
          <Bold>{user?.username}</Bold>
          <Light>{user?.bio} </Light>
        </Item>
        <Item>
          <Light>Following</Light>
          <Bold>{user?.followingCount}</Bold>
        </Item>
        <Item>
          <Light>Followers</Light>
          <Bold>{user?.followersCount} </Bold>
        </Item>
        <Item>
          <Light>Posts</Light>
          <Bold>{user?.postsCount}</Bold>
        </Item>
        <Item>
          <Button>View Profile</Button>
        </Item>
      </StyledList>
    </Card>
  );
};

export default InfoCard;
