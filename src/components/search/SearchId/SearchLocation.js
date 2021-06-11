import React, { memo } from 'react';

import PropTypes from 'prop-types';

export const SearchLocation = memo(({location, description, user}) => {

   const {city, address, country} = location;

    return (
        <div className="searchId_info-location">
            <div className="searchId_info-location-description">
            <img
                src={user.profilePhoto}
                className="searchId_info-user-img me-2"
                alt="userPhoto"
                />

            <p className="m-0">{description}</p>
            <span>{`-${user.userName}`}</span>    
                </div>
            <div className="searchId_info-location-address">
                <h3 ><i className="fas fa-globe-americas search-icon"></i> {country}</h3>
                <h4 className=""> <i className="fas fa-city search-icon"></i> {city}</h4>
                <p><i className="fas fa-map-marker-alt search-icon"></i> {address}</p>
        
            </div>
            

        </div>
    )
})

SearchLocation.propTypes = {
    location: PropTypes.object
}
