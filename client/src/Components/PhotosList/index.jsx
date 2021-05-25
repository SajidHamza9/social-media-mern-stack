import React, { useEffect } from 'react';
import { Card, Header, Title } from '../Friends/style';
import { Body, Image, ImageContainer } from './style';
import { Container, Grid } from '@material-ui/core';
import { photos } from '../../data/photos';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/actions/modalActions';
import { loadProfilePosts } from '../../redux/actions/postActions.js';

const useStyle = makeStyles({
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const PhotosList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { currentUserId } = useSelector((state) => state.auth);
  const postsWithImage = posts.filter((post) => !!post.image);
  const classes = useStyle();
  useEffect(() => {
    dispatch(loadProfilePosts(currentUserId));
  }, []);
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Header>
        <Title>Photos</Title>
      </Header>
      <Body>
        <Container maxWidth='md'>
          <Grid container spacing={3}>
            {postsWithImage.map((p) => (
              <Grid
                key={p._id}
                item
                xs={12}
                sm={6}
                md={4}
                className={classes.item}>
                <ImageContainer>
                  <Image
                    src={`data:${p.image.contentType};base64, ${p.image.data}`}
                    onClick={() => dispatch(openModal(p._id))}
                  />
                </ImageContainer>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Body>
    </Card>
  );
};

export default PhotosList;
