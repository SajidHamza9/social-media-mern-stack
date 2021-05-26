import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles, Card, Header, Title } from '../ConfirmModal/style';
import { Body } from './style';
import UserItem from '../UserItem';

const LikesModal = ({ open, handleClose, suggestions }) => {
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
              <Title>Suggestions</Title>
            </Header>
            <Body>
              {suggestions.map((s) => (
                <UserItem
                  key={s.userId}
                  name={s.username}
                  pdp={s.pdp}
                  userId={s.userId}
                  close={handleClose}
                  status={s.isFollow}
                />
              ))}
            </Body>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};

export default LikesModal;