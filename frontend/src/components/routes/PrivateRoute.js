import React from 'react'
import { isLogin } from '../../utils/auth';
import { Route, Redirect } from 'react-router';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => isLogin() ? <Component {...props} /> : <Redirect to="/login" />} />
    );
};

