import React, { useState } from 'react';
import { Card, Title, Body } from './style';
import { Button } from '../InfoCard/style';
import { Header } from '../Photos/style';
import { suggestions } from '../../data/home';
import UserItem from '../UserItem';
import SuggestionsModal from '../SuggestionsModal';
const Suggestions = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card>
        <Header>
          <Title>Suggestions</Title>
          <Button onClick={() => setOpen(!open)}>View All</Button>
        </Header>
        <Body>
          {suggestions.map((s) => (
            <UserItem key={s.id} img={s.img} name={s.name} />
          ))}
        </Body>
      </Card>
      <SuggestionsModal
        open={open}
        handleClose={() => setOpen(!open)}
        suggestions={[]}
      />
    </>
  );
};

export default Suggestions;
