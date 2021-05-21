import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  useStyles,
  Actions,
  Button,
  Card,
  Header,
  Text,
  Title,
  Body,
} from './style';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const ConfirmModal = ({ open, handleClose, postId, type, commentId }) => {
  const classes = useStyles();

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
              <Title>Confirm Deletion</Title>
            </Header>
            <Body>
              <Text>Are you Sure?</Text>
              <Actions>
                <Button>
                  <CloseIcon fontSize='inherit' />
                </Button>
                <Button contained>
                  <CheckIcon fontSize='inherit' />
                </Button>
              </Actions>
            </Body>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
