import React from 'react'

export const SearchLocation = () => {
    return (
        <div className="searchId_info-location">
            <div className="d-flex w-65 m-auto justify-content-between">
                <h4 ><i class="fas fa-globe-americas search-icon"></i> Mexico</h4>
                <h4> <i class="fas fa-city search-icon"></i> CDMX</h4>
            </div>
            <div className="d-flex w-100 text-center">
                <p><i class="fas fa-map-marker-alt search-icon"></i> Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX</p>
            </div>

            <iframe className="SearchId_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565428!2d-99.16869369206862!3d19.427023126223553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1618779139095!5m2!1ses!2smx" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}
