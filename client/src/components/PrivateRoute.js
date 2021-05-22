import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";

const PrivateRoute = ({component: Component, ...res}) => {
    
    const {isAuth} = useSelector(state => state.auth);

    const history = useHistory();
    
    return (
        <Route {...res} render={props => {
            console.log(props);
            return  isAuth ? <Component {...props} />
            : history.push('/login')
        }} />
    )
};

export default PrivateRoute;
