import React from 'react';
import { Container } from '@material-ui/core';
import HeaderProfile from '../../components/HeaderProfile';
import FriendsList from '../../components/FriendsList';

const FollowersScreen = () => {
  return (
    <Container maxWidth='md'>
      <HeaderProfile />
      <FriendsList title='Followers' />
    </Container>
  );
};

export default FollowersScreen;
