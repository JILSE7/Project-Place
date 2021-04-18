import React from "react";

export const ProfileCover = () => {
  return(
    <div className="profile-cover">
        <div className="shadow"></div>
        <div className="profile-avatar">
            <img src="https://scontent.fcvj3-1.fna.fbcdn.net/v/t1.6435-0/p526x296/45886642_887495194707397_3858252169484435456_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_xeH-7Rq9pkAX_hFd5i&_nc_ht=scontent.fcvj3-1.fna&tp=6&oh=313471eaa5c02079b57a0d779b7cd8b7&oe=609D30C0" alt="img" />
            <a href="#" className="change-photo">
                <i className="fas fa-camera"></i> 
                <span>Cambiar foto</span>
            </a>
        </div>

        <div className="profile-data">
            <h4 className="profile-user">Benito Gutierritos</h4>
            <p className="profile-biography">Soy el Beni pa' los compas, soy de Jaguares de Chiapas, me gusta visitar la Sierra Tarahumara y tomarme fotos con esculturas olmecas.</p>
            <ul className="profile-list">
                <li>8 Seguidores</li>
                <li>15 Seguidos</li>
                <li>5 Publicaciones</li>
            </ul>
        </div>

        <div className="profile-options">
            <button type="">Cambiar portada</button>
            <button type=""><i className="fas fa-wrench"></i></button>
        </div>
    </div>
  )
};