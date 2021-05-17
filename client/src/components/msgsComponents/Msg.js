import React from 'react';
import { Avatar } from '@material-ui/core';

const Msg = ({ image, msg }) => {
  const type = msg.sender === 'me' ? 'sent' : 'received';
  return (
    <div className={type}>
      <div className='received'>
        {type === 'received' && <Avatar src={image} />}
        <p>{msg.message}</p>
      </div>
    </div>
  );
};

export default Msg;
