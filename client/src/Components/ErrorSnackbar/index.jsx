import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_ERRORS } from '../../redux/actions/types';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const ErrorSnackbar = () => {
  const { showSnackbar, errors } = useSelector((state) => state.errorsAuth);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  return (
    <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='error'>
        {errors.msg}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
