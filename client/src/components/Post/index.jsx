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
import { IconButton } from '@material-ui/core';
import PostModal from '../PostModal';

const Post = ({ pdp, caption, image, name, children, mb }) => {
  const post = {
    pdp,
    name,
    caption,
    image,
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card mb={mb}>
        <Header>
          <StyledAvatar src={pdp} />
          <Name>{name}</Name>
        </Header>
        <Body>
          <Caption>{caption}</Caption>
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
            <AddCommentIcon onClick={handleOpen} />
            <Number onClick={handleOpen}>16</Number>
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
      <PostModal post={post} open={open} handleClose={handleClose} />
    </>
  );
};

export default Post;
