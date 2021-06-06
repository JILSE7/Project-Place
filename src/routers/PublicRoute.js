import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
    IsAunthenticated,
    ruta,
    component: Component,
    ...rest
}) => {
    
    const path = localStorage.getItem('lastPath') || '';
    return (
        <Route {...rest}
        component= {(props) =>(
            (IsAunthenticated) ?  (<Redirect to={path.length> 0 ? path: '/'}/>) : (<Component {...props}/>)  
        )}
        />
    )
}


PublicRoute.propTypes = {
    IsAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}