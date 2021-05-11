import React from 'react';
import { FloatBtn, StyledBadge } from './style';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
const MessagesBtn = () => {
  return (
    <StyledBadge invisible={false} badgeContent={4} color='error'>
      <FloatBtn size='large'>
        <ChatBubbleIcon style={{ color: '#fff' }} />
      </FloatBtn>
    </StyledBadge>
  );
};

export default MessagesBtn;
