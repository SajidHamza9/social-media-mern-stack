import React, { useState, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import {
  useStyles,
  Button,
  Card,
  Header,
  ImageWrapper,
  StyledAvatar,
  Title,
  Input,
  Form,
  Label,
} from './style';

const EditProfileModal = ({ handleClose, open }) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const ref = useRef();

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Card>
            <Header>
              <Title>Edit Profile</Title>
              <Button>SAVE</Button>
            </Header>
            <ImageWrapper>
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
              <StyledAvatar
                src={file ? URL.createObjectURL(file) : '/images/img2.jpeg'}>
                <IconButton onClick={() => ref.current.click()}>
                  <AddAPhotoIcon
                    fontSize='large'
                    style={{ color: '#ab987a' }}
                  />
                </IconButton>
              </StyledAvatar>
            </ImageWrapper>

            <Form>
              <Label>Username :</Label>
              <Input placeholder='Enter username' id='usernameId' type='text' />
              <Label>Bio :</Label>
              <Input placeholder='Enter bio' id='bioId' type='text' />
            </Form>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
