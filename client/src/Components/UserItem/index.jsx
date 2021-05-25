import React, { useState } from 'react';
import {
  Div,
  Name,
  StyledAvatar,
  FlexDiv,
  OutlinedButton,
  PrimaryButton,
} from './style';
import { useSelector, useDispatch } from 'react-redux';
import { getUserId } from '../../redux/actions/userAcions';
import { useHistory } from 'react-router-dom';

const UserItem = ({ img, name, status, userId }) => {
  const [isFollowed, setIsFollowed] = useState(status);
  const { currentUserId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const showProfile = () => {
    dispatch(getUserId(userId));
    history.push('/profile');
  };
  return (
    <Div>
      <FlexDiv>
        <StyledAvatar onClick={showProfile} src={img} />
        <Name onClick={showProfile}>{name}</Name>
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
