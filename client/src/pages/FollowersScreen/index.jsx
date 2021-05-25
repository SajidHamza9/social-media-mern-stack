import React from 'react';
import { Container } from '@material-ui/core';
import HeaderProfile from '../../components/HeaderProfile';
import FriendsList from '../../components/FriendsList';
import { useSelector } from 'react-redux';

const FollowersScreen = () => {
  const { followers } = useSelector((state) => state.userProfile);
  return (
    <Container maxWidth='md'>
      <HeaderProfile />
      <FriendsList title='Followers' list={followers} />
    </Container>
  );
};

export default FollowersScreen;
