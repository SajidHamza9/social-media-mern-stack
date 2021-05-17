import React from 'react';
import { Container } from '@material-ui/core';
import HeaderProfile from '../../components/HeaderProfile';
import FriendsList from '../../components/FriendsList';

const FriendsScreen = () => {
  return (
    <Container maxWidth='md'>
      <HeaderProfile />
      <FriendsList />
    </Container>
  );
};

export default FriendsScreen;
