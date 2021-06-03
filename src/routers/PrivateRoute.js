import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({
    IsAunthenticated,
    component: Component,
    ...rest
}) => {
    //Si esta auntenticado nos deja pasar, si no no
    return (
        <Route {...rest}
        component= {(props) =>(
            (IsAunthenticated) ? (<Component {...props}/>) 
                                : (<Redirect to="/login"/>)
        )}
        />
    )
}


PrivateRoute.propTypes = {
    IsAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}