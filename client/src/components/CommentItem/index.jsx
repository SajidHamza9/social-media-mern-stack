import React, { useState } from 'react';
import { Comment, Name, RightSide, StyledAvatar, Wrapper } from './style';
import { Box, Menu, MenuItem, Fade } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ConfirmModal from '../ConfirmModal';
import EditPost from '../EditPost';

const CommentItem = ({ pdp, name, comment }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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
    <Wrapper>
      <StyledAvatar src={pdp} />
      <RightSide>
        <Box display='flex' justifyContent='space-between'>
          <Name>{name}</Name>
          <Box>
            <MoreHorizIcon
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
        </Box>
        {showEdit ? (
          <EditPost
            type='COMMENT'
            text={comment}
            close={() => setShowEdit(false)}
          />
        ) : (
          <Comment>{comment}</Comment>
        )}
      </RightSide>
      <ConfirmModal open={openDelete} handleClose={handleCloseDelete} />
    </Wrapper>
  );
};

export default CommentItem;
