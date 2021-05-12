import React from 'react';
import { Comment, Name, RightSide, StyledAvatar, Wrapper } from './style';

const CommentItem = ({ pdp, name, comment }) => {
  return (
    <Wrapper>
      <StyledAvatar src={pdp} />
      <RightSide>
        <Name>{name}</Name>
        <Comment>{comment}</Comment>
      </RightSide>
    </Wrapper>
  );
};

export default CommentItem;
