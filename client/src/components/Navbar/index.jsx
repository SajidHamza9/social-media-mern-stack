import React, { useState } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLink,
  NavItem,
  StyledAvatar,
  SearchContainer,
  SearchInput,
} from './style';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon fontSize='large' />
            LOGO
          </NavLogo>
          <SearchContainer>
            <SearchIcon />
            <SearchInput type='text' placeholder='Search...' />
          </SearchContainer>

          <MobileIcon onClick={() => setClick(!click)}>
            {click ? (
              <CloseOutlinedIcon fontSize='inherit' />
            ) : (
              <MenuOutlinedIcon fontSize='inherit' />
            )}
          </MobileIcon>
          <NavMenu onClick={() => setClick(!click)} click={click}>
            <NavItem>
              <NavLink to='/'>
                <HomeIcon />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>
                <Badge badgeContent={3} color='error'>
                  <NotificationsIcon />
                </Badge>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/profile'>
                <StyledAvatar alt='pdp' src='/images/img2.jpeg' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/'>
                <ExitToAppIcon />
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
