import React from 'react';
import { Header, StyledAvatar } from './style';
import { Bold, Light } from '../InfoCard/style.js';

const HeaderProfile = ({ username, pdp, bio }) => {
  return (
    <Header>
      <StyledAvatar src='/images/img2.jpeg' />
      <Bold>{username}</Bold>
      <Light>{bio}</Light>
    </Header>
  );
};

export default HeaderProfile;
