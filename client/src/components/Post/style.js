import styled from 'styled-components';
import { Typography, Avatar } from '@material-ui/core';

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.24);
  margin-bottom: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const Name = styled(Typography)`
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  margin-left: 15px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
`;

export const Caption = styled(Typography)`
  color: #000;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 1rem 1rem 1rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  height: 500px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const CardActions = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const Number = styled(Typography)`
  font-weight: 300;
  font-size: 15px;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  color: #ab987a;
  cursor: pointer;
`;
