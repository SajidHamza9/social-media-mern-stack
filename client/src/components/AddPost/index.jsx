import React, { useState, useRef } from 'react';
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
  const [file, setFile] = useState(null);
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
          {file ? <Image img={file} /> : null}
        </Content>
      </Header>
      <StyledDivider />
      <CardActions>
        <input
          ref={ref}
          style={{ display: 'none' }}
          type='file'
          onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        />
        <IconButton onClick={() => ref.current.click()}>
          <ImageIcon style={{ color: ' #ab987a' }} />
        </IconButton>
        <IconButton
          style={{ color: ' #ab987a' }}
          onClick={() => {
            if (caption || file) {
              addPost({
                id: Math.random() * 1000,
                name: 'Hamza Sajid',
                pdp: '/images/img3.jpeg',
                image: file,
                caption: caption,
              });
            }

            setCaption('');
            setFile(null);
          }}>
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AddPost;
