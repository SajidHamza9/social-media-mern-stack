import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Post from '../Post';
import CommentItem from '../CommentItem';
import { useStyles } from './style';
import { comments } from '../../data/home';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/modalActions';

const post = {
  pdp: './images/img1.jpeg',
  caption:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
  image: './images/img3.jpeg',
  name: 'Hamza Sajid',
};
const PostModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal);

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={isOpen}>
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
