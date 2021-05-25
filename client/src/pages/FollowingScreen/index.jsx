import React from 'react';
import { Container } from '@material-ui/core';
import HeaderProfile from '../../components/HeaderProfile';
import FriendsList from '../../components/FriendsList';

const FollowingScreen = () => {
  return (
    <Container maxWidth='md'>
      <HeaderProfile />
      <FriendsList title='Following' />
    </Container>
  );
};

export default FollowingScreen;
