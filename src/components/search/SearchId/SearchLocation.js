import React from 'react'

export const SearchLocation = ({location}) => {
   const {city, address, country} = location;
   console.log(country, city, address);
    return (
        <div className="searchId_info-location">
            <div className="d-flex w-80 m-auto justify-content-between">
                <h4 ><i className="fas fa-globe-americas search-icon"></i> {country}</h4>
                <h4 className="ml-3"> <i className="fas fa-city search-icon"></i> {city}</h4>
            </div>
            <div className="searchId_Ubicacion">
                <p><i className="fas fa-map-marker-alt search-icon"></i> {address}</p>
            </div>

        </div>
    )
}
