import React, { useState, useEffect } from 'react';
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
} from './style';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

import SearchInput from '../SearchInput';

const useStyles = makeStyles({
  linkIcon: {
    marginRight: 5,
  },
});
const Navbar = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon fontSize='large' />
            LOGO
          </NavLogo>
          {/* <SearchInput /> */}

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
