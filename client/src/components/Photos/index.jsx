import React from 'react';
import {
  Card,
  Header,
  Title,
  Button,
  Body,
  Image,
  ImageContainer,
} from './style';
import { Grid } from '@material-ui/core';
// import { photos } from '../../data/profile';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions/modalActions';

const Photos = () => {
  const { posts } = useSelector((state) => state.post);
  const postsWithImage = posts.filter((post) => !!post.image).slice(0, 4);
  const dispatch = useDispatch();

  console.log(postsWithImage);
  return (
    <Card>
      <Header>
        <Title>Photos</Title>
        <Button href='/photos'>View All</Button>
      </Header>
      <Body>
        <Grid container>
          {postsWithImage.map((p) => {
            return (
              <Grid item key={p.id} xs={6}>
                <ImageContainer>
                  <Image
                    onClick={() => dispatch(openModal(p._id))}
                    src={`data:${p.image.contentType};base64, ${p.image.data}`}
                  />
                </ImageContainer>
              </Grid>
            );
          })}
        </Grid>
      </Body>
    </Card>
  );
};

export default Photos;
