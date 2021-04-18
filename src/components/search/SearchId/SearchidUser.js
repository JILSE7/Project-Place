import React from 'react'

export const SearchidUser = () => {
    return (
        <div className="searchId_info-user">
            <div className="d-flex align-items-center">
                <img
                src="https://www.entrenamiento.com/wp-content/uploads/2018/05/gente-feliz-es-optimista-720x480.jpg"
                className="searchId_info-user-img me-2"
                />
                <div className="searchId_info-userid">
                    <h5>Said Mandujano</h5>
                    <div className="d-flex">
                        <p className="me-2"> <i class="fas fa-users"></i> 7700</p>
                        <p ><i class="fas fa-image"></i> 7</p>
                    </div>
                </div>
            </div>
            <button className="btn d-flex align-items-center"><i class="fas fa-user-check"></i> Siguiendo</button>
        </div>
    )
}
