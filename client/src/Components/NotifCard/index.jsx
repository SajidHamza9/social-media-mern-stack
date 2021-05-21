import React from 'react';
import { Card, Header, Title } from './style';
import NotifItem from '../NotifItem';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const NotifCard = ({ open, anchorEl, close }) => {
  return (
    <Popper open={open} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={close}>
          <Fade {...TransitionProps} timeout={350}>
            <Card>
              <Header>
                <Title>Notifications</Title>
              </Header>
              <NotifItem type='LIKE' close={close} />
              <NotifItem type='FOLLOW' close={close} />
              <NotifItem type='COMMENT' close={close} />
              <NotifItem type='LIKE' close={close} />
              <NotifItem type='FOLLOW' close={close} />
              <NotifItem type='COMMENT' close={close} />
            </Card>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  );
};

export default NotifCard;
