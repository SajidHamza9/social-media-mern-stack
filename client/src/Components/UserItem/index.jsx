import React, { useState } from 'react';
import { Button, Div, Name, StyledAvatar, FlexDiv } from './style';

const UserItem = ({ img, name, status }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Div>
      <FlexDiv>
        <StyledAvatar src={img} />
        <Name>{name}</Name>
      </FlexDiv>
      {isFollowed ? (
        <Button onClick={() => setIsFollowed(!isFollowed)}>Unfollow</Button>
      ) : (
        <Button onClick={() => setIsFollowed(!isFollowed)} contained>
          Follow
        </Button>
      )}
    </Div>
  );
};

export default UserItem;
