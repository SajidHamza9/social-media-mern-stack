import React from 'react';
import { Button, Div, Name, StyledAvatar, FlexDiv } from './style';
import AddIcon from '@material-ui/icons/Add';

const SuggestionItem = ({ img, name, status }) => {
  return (
    <Div>
      <FlexDiv>
        <StyledAvatar src={img} />
        <Name>{name}</Name>
      </FlexDiv>
      <Button>
        <AddIcon color='inherit' />
      </Button>
    </Div>
  );
};

export default SuggestionItem;
