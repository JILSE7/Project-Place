import React from 'react'

export const SearchLocation = () => {
    return (
        <div className="searchId_info-location">
            <h3 className="text-center">Ubicacion</h3>
            <div className="d-flex w-65 m-auto justify-content-between">
                <h4 ><i class="fas fa-globe-americas"></i> Mexico</h4>
                <h4> <i class="fas fa-city"></i> CDMX</h4>
            </div>
            <div className="d-flex w-100 text-center">
                <p><i class="fas fa-map-marker-alt"></i> Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX</p>
            </div>
        </div>
    )
}
