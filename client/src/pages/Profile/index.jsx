import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import HeaderProfile from '../../components/HeaderProfile';
import Post from '../../components/Post';
import Photos from '../../components/Photos';
import Button from '../../components/Button';
import { posts } from '../../data/home';
import EditIcon from '@material-ui/icons/Edit';
import Friends from '../../components/Friends';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../../redux/actions/authActions';
const useStyles = makeStyles((theme) => ({
  sticky: {
    position: '-webkit-sticky',
    position: 'sticky',
    height: 'fit-content',
    top: '70px',
    [theme.breakpoints.down('xs')]: {
      position: 'static',
    },
  },
}));

const Profile = ( {history} ) => {
  const classes = useStyles();
  
  const auth = useSelector(state => state.auth);
   
  useEffect(() => {
      console.log("private");
  }, [auth]);


  return (
    <Container maxWidth='md'>
      <HeaderProfile />
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12} className={classes.sticky}>
          <Button icon={<EditIcon />} primary>
             {JSON.stringify(auth)}
          </Button>
          <Photos />
          <Friends />
        </Grid>
        <Grid item sm={8} xs={12}>
          {posts.map((p) => (
            <Post
              mb
              key={p.id}
              caption={p.caption}
              pdp={p.pdp}
              image={p.image}
              name={p.name}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
