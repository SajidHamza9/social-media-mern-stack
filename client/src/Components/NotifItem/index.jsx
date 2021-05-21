import React from 'react';
import { Action, Div, Name, StyledAvatar, FlexDiv, Time } from './style';
import { Box, Badge } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCommentIcon from '@material-ui/icons/AddComment';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';

const NotifItem = React.forwardRef((props, ref) => {
  const handleClick = (e) => {
    props.close(e);
  };
  const setInfo = () => {
    switch (props.type) {
      case 'LIKE':
        return { action: 'Liked your post', icon: FavoriteIcon };
      case 'COMMENT':
        return { action: 'Commented your post', icon: AddCommentIcon };
      case 'FOLLOW':
        return { action: 'Followed you', icon: PersonIcon };
    }
  };
  const SmallIcon = withStyles((theme) => ({
    root: {
      width: 17,
      height: 17,
      color: '#FFF',
      border: `1px solid ${theme.palette.background.paper}`,
      backgroundColor: '#AB987A',
      borderRadius: 150,
      padding: 2,
    },
  }))(setInfo().icon);
  return (
    <Div onClick={handleClick} snackbar={props.snackbar}>
      <FlexDiv>
        <Badge
          overlap='circle'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<SmallIcon />}>
          <StyledAvatar src='/images/img1.jpeg' />
        </Badge>
        <Box>
          <Name>Hamza Sajid</Name>
          <Action>{setInfo().action}</Action>
        </Box>
      </FlexDiv>
      <Time>2min</Time>
    </Div>
  );
});

export default NotifItem;
