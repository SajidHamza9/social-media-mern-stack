import React, { useState } from 'react';

import {
  Card,
  Header,
  Name,
  StyledAvatar,
  Body,
  Caption,
  ImageContainer,
  Image,
  CardActions,
  Action,
  Number,
  Input,
  InputContainer,
} from './style';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCommentIcon from '@material-ui/icons/AddComment';
import SendIcon from '@material-ui/icons/Send';
import { IconButton, Menu, MenuItem, Box, Fade } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ConfirmModal from '../ConfirmModal';
import EditPost from '../EditPost';
import { openModal } from '../../redux/actions/modalActions';
import { useDispatch } from 'react-redux';

const Post = ({ pdp, caption, image, name, children, mb }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    setOpenDelete(true);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    setShowEdit(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  return (
    <>
      <Card mb={mb}>
        <Header>
          <Box display='flex' alignItems='center'>
            <StyledAvatar src={pdp} />
            <Name>{name}</Name>
          </Box>
          <Box>
            <MoreVertIcon
              style={{ color: '#ab987a', cursor: 'pointer' }}
              onClick={handleClick}
            />
            <Menu
              TransitionComponent={Fade}
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}>
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
          </Box>
        </Header>
        <Body>
          {showEdit ? (
            <EditPost text={caption} close={() => setShowEdit(false)} />
          ) : (
            <Caption>{caption}</Caption>
          )}
          {image ? (
            <ImageContainer>
              {' '}
              <Image src={image} />{' '}
            </ImageContainer>
          ) : null}
        </Body>
        <CardActions>
          <Action>
            <FavoriteIcon />
            <Number>20</Number>
          </Action>
          <Action>
            <AddCommentIcon onClick={() => dispatch(openModal())} />
            <Number onClick={() => dispatch(openModal())}>16</Number>
          </Action>
        </CardActions>
        <InputContainer>
          <Input type='text' placeholder='Add comment...' />
          <IconButton>
            <SendIcon style={{ color: '#ab987a' }} />
          </IconButton>
        </InputContainer>
        {children}
      </Card>
      <ConfirmModal open={openDelete} handleClose={handleCloseDelete} />
    </>
  );
};

export default Post;
