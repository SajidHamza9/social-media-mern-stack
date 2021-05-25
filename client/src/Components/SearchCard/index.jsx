import React from 'react';
import { Card } from './style';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import SimpleUserItem from '../SimpleUserItem';

const SearchCard = ({ open, anchorEl, close }) => {
  return (
    <Popper style={{ zIndex: 1000 }} open={open} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={close}>
          <Fade {...TransitionProps} timeout={350}>
            <Card>
              <SimpleUserItem pdp='/images/img3.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img1.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img4.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img3.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img1.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img4.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img3.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img1.jpeg' name='Hamza Sajid' />
              <SimpleUserItem pdp='/images/img4.jpeg' name='Hamza Sajid' />
            </Card>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  );
};

export default SearchCard;
