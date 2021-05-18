import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...res }) => {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("private");
  }, [auth]);
  return (
    <Route
      {...res}
      render={(props) => {
        return auth.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
