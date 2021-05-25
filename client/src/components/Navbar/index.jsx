import React, { useState, useRef } from 'react';
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
import NotifCard from '../NotifCard';
import { useSelector, useDispatch } from 'react-redux';
//import logout function action
import { logout } from '../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import { getNotif } from '../../redux/actions/notificationActions';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const { currentUserId } = useSelector((state) => state.auth);
  const { count } = useSelector((state) => state.notification);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    dispatch(getNotif());
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = () => {
    console.log('logout');
    dispatch(logout());
    history.push('/login');
    
  };

  return (
    <>
      <NotifCard open={open} anchorEl={anchorRef.current} close={handleClose} />
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

          <MobileIcon
            onClick={() => {
              setClick(!click);
            }}>
            {click ? (
              <CloseOutlinedIcon fontSize='inherit' />
            ) : (
              <MenuOutlinedIcon fontSize='inherit' />
            )}
          </MobileIcon>
          <NavMenu click={click}>
            <NavItem onClick={() => setClick(!click)}>
              <NavLink to='/'>
                <HomeIcon />
              </NavLink>
            </NavItem>
            <NavItem onClick={handleToggle} ref={anchorRef}>
              <NavLink>
                <Badge badgeContent={open ? 0 : count} color='error'>
                  <NotificationsIcon />
                </Badge>
              </NavLink>
            </NavItem>
            <NavItem onClick={() => setClick(!click)}>
              <NavLink to={`/profile/${currentUserId}`}>
                <StyledAvatar alt='pdp' src='/images/img2.jpeg' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleLogout}>
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
