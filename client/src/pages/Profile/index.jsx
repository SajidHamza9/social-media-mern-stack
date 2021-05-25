import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import HeaderProfile from '../../components/HeaderProfile';
import Post from '../../components/Post';
import Photos from '../../components/Photos';
// import { posts } from '../../data/home';
import EditIcon from '@material-ui/icons/Edit';
import Friends from '../../components/Friends';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonPost from '../../components/SkeletonPost';
import { loadProfilePosts } from '../../redux/actions/postActions';
import EditProfileModal from '../../components/EditProfileModal';
import { PrimarydButton, ButtonWrapper, OutlinedButton } from './style';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { getUserProfile } from '../../redux/actions/userAcions';
const useStyles = makeStyles((theme) => ({
  sticky: {
    position: 'sticky',
    height: 'fit-content',
    top: '70px',
    [theme.breakpoints.down('md')]: {
      position: 'static',
    },
  },
  last: {
    [theme.breakpoints.down('md')]: {
      order: 3,
    },
  },
}));

const Profile = ({}) => {
  const classes = useStyles();
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { userId, followers, following, isFollow } = useSelector(
    (state) => state.userProfile,
  );
  const [followed, setFollowed] = useState(isFollow);
  const { currentUserId } = useSelector((state) => state.auth);

  const handleClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(getUserProfile(userId));
    dispatch(loadProfilePosts(userId));
  }, [userId]);

  return (
    <Container maxWidth='lg'>
      <HeaderProfile />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12} lg={3} className={classes.sticky}>
          {currentUserId.toString() === userId?.toString() ? (
            <PrimarydButton
              startIcon={<EditIcon />}
              onClick={() => setOpen(!open)}
              primary>
              Edit Profile
            </PrimarydButton>
          ) : (
            <ButtonWrapper>
              {followed ? (
                <OutlinedButton
                  onClick={() => setFollowed(!followed)}
                  startIcon={<PersonAddDisabledIcon />}>
                  Unfollow
                </OutlinedButton>
              ) : (
                <OutlinedButton
                  onClick={() => setFollowed(!followed)}
                  startIcon={<PersonAddIcon />}>
                  Follow
                </OutlinedButton>
              )}
              <PrimarydButton startIcon={<ChatBubbleIcon />}>
                Message
              </PrimarydButton>
            </ButtonWrapper>
          )}
          <Photos />
        </Grid>
        <Grid item md={12} lg={6} className={classes.last}>
          {loading ? (
            <div>
              <SkeletonPost />
              <SkeletonPost />
            </div>
          ) : (
            posts.map((p) => (
              <Post
                mb
                key={p._id}
                caption={p.caption}
                pdp={p.pdp}
                image={p.image}
                name={p.username}
                nbLikes={p.likes.length}
                nbComments={p.comments.length}
                postId={p._id}
                userId={p.userId}
                isLiked={p.isLiked}
                time={p.createdAt}
                likes={p.likes}
              />
            ))
          )}
        </Grid>
        <Grid item md={6} xs={12} lg={3} className={classes.sticky}>
          <Friends
            title='Following'
            to='/following'
            list={following?.slice(0, 3)}
          />
          <Friends
            title='Followers'
            to='/followers'
            list={followers?.slice(0, 3)}
          />
        </Grid>
      </Grid>
      <EditProfileModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Profile;
