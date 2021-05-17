import React from 'react';
import { Card, Header, Title } from '../Friends/style';
import { Body, Image, ImageContainer } from './style';
import { Container, Grid } from '@material-ui/core';
import { photos } from '../../data/photos';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const PhotosList = () => {
  const classes = useStyle();
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Header>
        <Title>Photos</Title>
      </Header>
      <Body>
        <Container maxWidth='md'>
          <Grid container spacing={3}>
            {photos.map((p) => (
              <Grid
                key={p.id}
                item
                xs={12}
                sm={6}
                md={4}
                className={classes.item}>
                <ImageContainer>
                  <Image src={p.img} />
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
