import React from 'react';
import { Div, FlexDiv, StyledAvatar, Name } from '../UserItem/style';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Badge } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserId } from '../../redux/actions/userAcions';

const LikeItem = ({ pdp, name, userId, display, close, closeLikesModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const showProfile = (e) => {
    dispatch(getUserId(userId));
    close && close(e);
    closeLikesModal && closeLikesModal();
    history.push('/profile');
  };
  const SmallIcon = withStyles((theme) => ({
    root: {
      display: `${display ? 'block' : 'none'}`,
      width: 17,
      height: 17,
      color: '#FFF',
      border: `1px solid ${theme.palette.background.paper}`,
      backgroundColor: '#AB987A',
      borderRadius: 150,
      padding: 2,
    },
  }))(FavoriteIcon);
  return (
    <Div>
      <FlexDiv>
        <Badge
          overlap='circle'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<SmallIcon />}>
          <StyledAvatar src={pdp} onClick={showProfile} />
        </Badge>
        <Name onClick={showProfile}>{name}</Name>
      </FlexDiv>
    </Div>
  );
};

export default LikeItem;
