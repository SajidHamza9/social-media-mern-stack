import React from 'react';
import { SnackbarContent } from 'notistack';
import NotifItem from '../NotifItem';

const NotifSnackbar = React.forwardRef((props, ref) => {
  return (
    <SnackbarContent ref={ref}>
      <NotifItem snackbar type={props.type} />
    </SnackbarContent>
  );
});

export default NotifSnackbar;
