import React, { useState } from 'react';
import {
  Div,
  Name,
  StyledAvatar,
  FlexDiv,
  OutlinedButton,
  PrimaryButton,
} from './style';
import { useSelector } from 'react-redux';

const UserItem = ({ img, name, status, userId }) => {
  const [isFollowed, setIsFollowed] = useState(status);
  const { currentUserId } = useSelector((state) => state.auth);
  return (
    <Div>
      <FlexDiv>
        <StyledAvatar src={img} />
        <Name>{name}</Name>
      </FlexDiv>
      {currentUserId !== userId ? (
        isFollowed ? (
          <OutlinedButton onClick={() => setIsFollowed(!isFollowed)}>
            Unfollow
          </OutlinedButton>
        ) : (
          <PrimaryButton onClick={() => setIsFollowed(!isFollowed)}>
            Follow
          </PrimaryButton>
        )
      ) : null}
    </Div>
  );
};

export default UserItem;
