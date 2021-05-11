import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Contacts from '../../components/Contacts';
import InfoCard from '../../components/InfoCard';
import Suggestions from '../../components/Suggestions';
import AddPost from '../../components/AddPost';
import Post from '../../components/Post';
import { posts } from '../../data/home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sticky: {
    position: '-webkit-sticky',
    position: 'sticky',
    height: 'fit-content',
    top: '70px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item md={3} className={classes.sticky}>
          <InfoCard />
          <Suggestions />
        </Grid>
        <Grid item sm={12} md={6}>
          <AddPost />
          {posts.map((p) => (
            <Post
              key={p.id}
              caption={p.caption}
              pdp={p.pdp}
              image={p.image}
              name={p.name}
            />
          ))}
        </Grid>
        <Grid item md={3} className={classes.sticky}>
          <Contacts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
