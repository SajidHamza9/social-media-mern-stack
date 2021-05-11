import React from 'react';
import {
  Card,
  Header,
  Input,
  StyledAvatar,
  StyledDivider,
  CardActions,
} from './style';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';

const AddPost = () => {
  return (
    <Card>
      <Header>
        <StyledAvatar src='/images/img2.jpeg' />
        <Input placeholder='What’s happening?' type='text' multiple />
      </Header>
      <StyledDivider />
      <CardActions>
        <ImageIcon />
        <SendIcon />
      </CardActions>
    </Card>
  );
};

export default AddPost;
