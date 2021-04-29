import React from "react";
import PropTypes from "prop-types";

const ProfileCover = ({user}) => {
  return(
      <div className="profile-cover" style={{backgroundImage: `url(${user.coverPhoto})`}}>
          <div className="shadow"></div>
          <div className="profile-avatar">
              <img src= {user.profilePhoto} alt="img" />
              <a href="#" className="change-photo">
                  <i className="fas fa-camera"></i> 
                  <span>Cambiar foto</span>
              </a>
          </div>

          { 
            user.posts !== undefined ?
              (<div className="profile-data">
                  <h4 className="profile-user">{user.firstName} {user.lastName}</h4>
                  <p className="profile-biography">{ user.information }</p>
                  <ul className="profile-list">
                      <li>{user.followers.length} Seguidores</li>
                      <li>{user.followed.length} Seguidos</li>
                      <li>{user.posts.length} Publicaciones</li>
                  </ul>
              </div>)
              : null
          }

          <div className="profile-options">
              <button type="">Cambiar portada</button>
              <button type=""><i className="fas fa-wrench"></i></button>
          </div>
      </div>
  )
};

/*ProfileCover.propTypes = {
    fotos: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        owner: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    profilePhoto: PropTypes.string.isRequired
  };*/

  export default ProfileCover;