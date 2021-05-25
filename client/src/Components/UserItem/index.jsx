import React, { useState } from 'react';
import {
  Div,
  Name,
  StyledAvatar,
  FlexDiv,
  OutlinedButton,
  PrimaryButton,
} from './style';

const UserItem = ({ img, name, status }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Div>
      <FlexDiv>
        <StyledAvatar src={img} />
        <Name>{name}</Name>
      </FlexDiv>
      {isFollowed ? (
        <OutlinedButton onClick={() => setIsFollowed(!isFollowed)}>
          Unfollow
        </OutlinedButton>
      ) : (
        <PrimaryButton onClick={() => setIsFollowed(!isFollowed)}>
          Follow
        </PrimaryButton>
      )}
    </Div>
  );
};

export default UserItem;
