import styled from 'styled-components';
import { Typography, IconButton, Avatar } from '@material-ui/core';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled(Typography)`
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  margin-left: 10px;
`;

export const Button = styled(IconButton)`
  border-radius: 6px;
  border: 1px solid #ab987a;
  color: #ab987a;
  padding: 5px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
`;
