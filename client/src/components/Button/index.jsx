import React from 'react';
import { StyledButton } from './style';

const Button = ({ primary, children, icon }) => {
  return (
    <StyledButton startIcon={icon} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
