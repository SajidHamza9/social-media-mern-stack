import React from 'react';
import { Card, Header, Title, Button, Body, Image } from './style';
import { Grid } from '@material-ui/core';
import { photos } from '../../data/profile';

const Photos = () => {
  return (
    <Card>
      <Header>
        <Title>Photos</Title>
        <Button>View All</Button>
      </Header>
      <Body>
        <Grid container>
          {photos.map((p) => (
            <Grid key={p.id} xs={6}>
              <Image img={p.img} />
            </Grid>
          ))}
        </Grid>
      </Body>
    </Card>
  );
};

export default Photos;
