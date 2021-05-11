import React from 'react';
import { Header, StyledAvatar } from './style';
import { Bold, Light } from '../InfoCard/style.js';

const HeaderProfile = () => {
  return (
    <Header>
      <StyledAvatar src='/images/img2.jpeg' />
      <Bold>Hamza Sajid</Bold>
      <Light>Bio</Light>
    </Header>
  );
};

export default HeaderProfile;
