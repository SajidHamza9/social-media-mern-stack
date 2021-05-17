import React, { useState } from 'react';
import { Card, Header, Title } from '../Friends/style';
import { SearchContainer, SearchInput, Item } from './style';
import { Body } from '../PhotosList/style';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { friends } from '../../data/Friends';
import UserItem from '../UserItem';

const useStyle = makeStyles({
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const FriendsList = () => {
  const classes = useStyle();
  const [name, setName] = useState('');
  const [items, setItems] = useState(friends);
  const searchHandler = (e) => {
    setName(e.target.value);
    setItems(
      friends.filter((f) =>
        f.name
          .trim()
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase()),
      ),
    );
  };
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Header style={{ justifyContent: 'space-between' }}>
        <Title>Friends</Title>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            value={name}
            type='text'
            placeholder='Search...'
            onChange={searchHandler}
          />
        </SearchContainer>
      </Header>
      <Body>
        <Container maxWidth='md'>
          <Grid container spacing={5}>
            {items.map((f) => (
              <Grid item xs={12} sm={6} key={f.id} className={classes.item}>
                <Item>
                  <UserItem img={f.pdp} name={f.name} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Body>
    </Card>
  );
};

export default FriendsList;
