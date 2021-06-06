import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import { PlaceContext } from '../context/PlaceContext';

export const PrivateRoute = ({
    IsAunthenticated,
    component: Component,
    ...rest
}) => {
        //Mantener la ultima ruta donde estubo el usuario
        localStorage.setItem('lastPath', rest.location.pathname);

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