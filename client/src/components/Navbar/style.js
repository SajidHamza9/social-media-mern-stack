import styled from 'styled-components';
import { Container } from '@material-ui/core';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #0f1626;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-bottom: 1rem;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavIcon = styled(GraphicEqOutlinedIcon)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%); */
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? 'block' : 'none')};
    flex-direction: row;
    width: 100%;
    height: calc(100vh - 80px);
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0f1626;
  }
`;

export const NavItem = styled.li`
  /* height: 80px; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 30px;
  height: 30px;
`;
