import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  Header,
  Input,
  StyledAvatar,
  StyledDivider,
  CardActions,
  Content,
  Image,
} from './style';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import { IconButton } from '@material-ui/core';

const AddPost = ({ addPost }) => {
  const [files, setFiles] = useState(null);
  const [caption, setCaption] = useState('');
  const ref = useRef();

  return (
    <Card>
      <Header>
        <StyledAvatar src='/images/img2.jpeg' />
        <Content>
          <Input
            placeholder='What’s happening?'
            type='text'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          {files ? <Image img={URL.createObjectURL(files[0])} /> : null}
        </Content>
      </Header>
      <StyledDivider />
      <CardActions>
        <input
          files={files}
          ref={ref}
          style={{ display: 'none' }}
          type='file'
          onChange={(e) => setFiles(e.target.files)}
        />
        <IconButton onClick={() => ref.current.click()}>
          <ImageIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            addPost({
              id: Math.random() * 1000,
              name: 'Hamza Sajid',
              pdp: '/images/img3.jpeg',
              image: URL.createObjectURL(files[0]),
              caption: caption,
            });
            setCaption('');
            setFiles(null);
          }}>
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AddPost;
