import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Post from '../Post';
import CommentItem from '../CommentItem';
import { useStyles } from './style';
import { comments } from '../../data/home';

const PostModal = ({ post, handleClose, open }) => {
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
          <div className={classes.wrapper}>
            <Post {...post}>
              {comments.map((c) => (
                <CommentItem
                  key={c.id}
                  pdp={c.pdp}
                  name={c.name}
                  comment={c.comment}
                />
              ))}
            </Post>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PostModal;
