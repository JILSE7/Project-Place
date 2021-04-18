import React from "react";

export const ProfileMenu = () => {
    return(
        <div className="profile-menu">
            <ul>
                <li><a href="#" title=""><i className="profile-icon fas fa-bullhorn"></i> Publicaciones</a></li>
                <li><a href="#" title=""><i className="profile-icon fas fa-info-circle"></i> Informacion</a></li>
                <li><a href="#" title=""><i className="profile-icon fas fa-grin"></i> Amigos </a></li>
                <li><a href="#" title=""><i className="profile-icon fas fa-camera"></i> Fotos</a></li>
            </ul>
        </div>
    );
};