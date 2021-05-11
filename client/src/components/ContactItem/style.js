import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(196, 196, 196, 0.25);
  }
`;

export const Name = styled(Typography)`
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  margin-left: 10px;
`;
