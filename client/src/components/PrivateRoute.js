import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...res }) => {
  const { isLoading, isAuth } = useSelector((state) => state.auth);

  return (
    <>
      {isLoading ? (
        <h1>LOADING</h1>
      ) : (
        <Route
          {...res}
          render={(props) => {
            return isAuth ? <Component {...props} /> : <Redirect to='/login' />;
          }}
        />
      )}
    </>
  );
};

export default PrivateRoute;
