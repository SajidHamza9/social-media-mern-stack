import styled from 'styled-components';
import { Typography, Avatar, Divider } from '@material-ui/core';

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.24);
  border-top: 5px solid #ab987a;
  margin-bottom: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const Input = styled.input`
  border: none;
  width: 90%;
  padding: 1rem 0;
  color: #a09999;
  font-weight: 300;
  font-size: 1rem;
  resize: none;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: #a09999;
    font-weight: 300;
    font-size: 1.2rem;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
  margin-right: 1rem;
`;

export const StyledDivider = styled(Divider)`
  width: 85%;
  margin-left: 10%;
`;

export const CardActions = styled.div`
  padding: 0.5rem 2rem 0.5rem 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ab987a;
`;

export const Image = styled.div`
  width: 130px;
  height: 130px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 6px;
  margin: 1rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
`;
