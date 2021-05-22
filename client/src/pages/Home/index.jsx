import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Contacts from '../../components/Contacts';
import InfoCard from '../../components/InfoCard';
import Suggestions from '../../components/Suggestions';
import AddPost from '../../components/AddPost';
import Post from '../../components/Post';
// import { posts } from '../../data/home';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { loadHomePosts } from '../../redux/actions/postActions';
import SkeletonPost from '../../components/SkeletonPost';
import { loadUser } from '../../redux/actions/authActions';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { loadUser } from '../../redux/actions/authActions';
const useStyles = makeStyles((theme) => ({
  sticky: {
    position: 'sticky',
    height: 'fit-content',
    top: '70px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  middle: {
    width: '100%',
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  const { currentUserId } = useSelector((state) => state.auth);
  const [postList, setPostList] = useState(posts);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
 
  const addPost = (post) => {
    setPostList((prev) => {
      const posts = [...prev, post];
      posts.reverse();
      return posts;
    });
  };

  useEffect(() => {
    dispatch(loadHomePosts(currentUserId));
  }, []);
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item md={3} className={classes.sticky}>
          <InfoCard />
          <Suggestions />
        </Grid>
        <Grid item sm={12} md={6} className={classes.middle}>
          <AddPost addPost={addPost} />
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
                userId={p.userId}
              />
            ))
          )}
        </Grid>
        <Grid item md={3} className={classes.sticky}>
          <Contacts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
