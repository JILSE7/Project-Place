import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProfileCover = ({user}) => {
    const [usuario, setUsuario] = useState({})
    console.log(user);
    useEffect(() => {
      setUsuario(user);
    }, [setUsuario, user])
  
    
  return(
      <>  
      {  (usuario) ? 
      <div className="profile-cover" style={{backgroundImage: `url(${usuario.coverPhoto})`}}>
          <div className="shadow"></div>
          <div className="profile-avatar">
              <img src= {usuario.profilePhoto} alt="img" />
              <span className="change-photo">
                  <i className="fas fa-camera"></i> 
                  <span>Cambiar foto</span>
              </span>
          </div> 

          { 
            usuario.posts !== undefined ?
              (<div className="profile-data">
                  <h4 className="profile-user">{usuario.firstName} {usuario.lastName}</h4>
                  <p className="profile-biography">{ usuario.information }</p>
                  <ul className="profile-list">
                      <li>{usuario.followers} Seguidores</li>
                      <li>{usuario.followed} Seguidos</li>
                      <li>{usuario.posts.length} Publicaciones</li>
                  </ul>
              </div>)
              : null
          }

          <div className="profile-options">
              <button type="">Cambiar portada</button>
              <button type=""><i className="fas fa-wrench"></i></button>
          </div>
      </div>
      
          : null
        }
    </>

  
  )
};

ProfileCover.propTypes = {
    user: PropTypes.object.isRequired
  };

  export default ProfileCover;