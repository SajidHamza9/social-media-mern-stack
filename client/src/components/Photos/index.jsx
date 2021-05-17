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
import { photos } from '../../data/profile';

const Photos = () => {
  return (
    <Card>
      <Header>
        <Title>Photos</Title>
        <Button href='/photos'>View All</Button>
      </Header>
      <Body>
        <Grid container>
          {photos.map((p) => (
            <Grid item key={p.id} xs={6}>
              <ImageContainer>
                <Image src={p.img} />
              </ImageContainer>
            </Grid>
          ))}
        </Grid>
      </Body>
    </Card>
  );
};

export default Photos;
