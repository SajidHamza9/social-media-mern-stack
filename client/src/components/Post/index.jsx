import React from 'react';
import {
  Card,
  Header,
  Name,
  StyledAvatar,
  Body,
  Caption,
  ImageWrapper,
  CardActions,
  Action,
  Number,
} from './style';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCommentIcon from '@material-ui/icons/AddComment';

const Post = ({ pdp, caption, image, name }) => {
  return (
    <Card>
      <Header>
        <StyledAvatar src={pdp} />
        <Name>{name}</Name>
      </Header>
      <Body>
        <Caption>{caption}</Caption>
        {image ? <ImageWrapper img={image} /> : null}
      </Body>
      <CardActions>
        <Action>
          <FavoriteIcon />
          <Number>20</Number>
        </Action>
        <Action>
          <AddCommentIcon />
          <Number>16</Number>
        </Action>
      </CardActions>
    </Card>
  );
};

export default Post;
