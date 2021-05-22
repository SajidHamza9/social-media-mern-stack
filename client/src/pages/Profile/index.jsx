import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import HeaderProfile from '../../components/HeaderProfile';
import Post from '../../components/Post';
import Photos from '../../components/Photos';
import Button from '../../components/Button';
// import { posts } from '../../data/home';
import EditIcon from '@material-ui/icons/Edit';
import Friends from '../../components/Friends';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonPost from '../../components/SkeletonPost';
import { loadProfilePosts } from '../../redux/actions/postActions';

const useStyles = makeStyles((theme) => ({
  sticky: {
    position: 'sticky',
    height: 'fit-content',
    top: '70px',
    [theme.breakpoints.down('xs')]: {
      position: 'static',
    },
  },
}));

const Profile = ({}) => {
  const classes = useStyles();
  const { id } = useParams();
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfilePosts(id));
  }, []);

  return (
    <Container maxWidth='md'>
      <HeaderProfile />
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12} className={classes.sticky}>
          <Button icon={<EditIcon />} primary>
            Edit Profile
          </Button>
          <Photos />
          <Friends />
        </Grid>
        <Grid item sm={8} xs={12}>
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
              />
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
