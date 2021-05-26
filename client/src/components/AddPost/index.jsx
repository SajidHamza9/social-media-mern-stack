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
  ImageContainer,
} from './style';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import { IconButton } from '@material-ui/core';
import { addPost } from '../../redux/actions/postActions';
import { useDispatch } from 'react-redux';

const AddPost = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const ref = useRef();
  const dispatch = useDispatch();

  return (
    <Card>
      <Header>
        <StyledAvatar src='/images/img2.jpeg' />
        <Content>
          <Input
            multiline
            placeholder='What’s happening?'
            type='text'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          {file ? (
            <ImageContainer>
              <Image src={URL.createObjectURL(file)} />
            </ImageContainer>
          ) : null}
        </Content>
      </Header>
      <StyledDivider />
      <CardActions>
        <input
          ref={ref}
          style={{ display: 'none' }}
          type='file'
          accept='image/*'
          name='image'
          onChange={(e) => {
            setFile(e.target.files[0]);
            e.target.value = null;
          }}
        />
        <IconButton onClick={() => ref.current.click()}>
          <ImageIcon style={{ color: ' #ab987a' }} />
        </IconButton>
        <IconButton
          style={{ color: ' #ab987a' }}
          onClick={() => {
            if (caption.trim() || file) {
              const formData = new FormData();
              formData.append('caption', caption);
              formData.append('image', file);
              setCaption('');
              setFile(null);
              dispatch(addPost(formData));
            }
          }}>
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AddPost;
