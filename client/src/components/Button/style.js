import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
  color: ${({ primary }) => (primary ? '#fff' : '#0F1626')};
  background-color: ${({ primary }) => (primary ? '#0F1626' : 'transparent')};
  border: 3px solid #0f1626;
  font-weight: 400;
  border-radius: 6px;
  width: 100%;
  &:hover {
    background-color: ${({ primary }) => (primary ? '#0F1626' : 'transparent')};
  }
`;
