import React from "react";

export const ProfileMenu = () => {
    return(
        <div className="profile-menu">
            <ul>
                <li><span title=""><i className="profile-icon fas fa-bullhorn"></i> Publicaciones</span></li>
                <li><span title=""><i className="profile-icon fas fa-info-circle"></i> Informacion</span></li>
                <li><span title=""><i className="profile-icon fas fa-grin"></i> Amigos </span></li>
            </ul>
        </div>
    );
};