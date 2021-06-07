import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { uploadPhoto } from '../../helpers/maps';
import { fetchConToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';
import { useParams } from "react-router";
import { PlaceContext } from "../../context/PlaceContext";

const ProfileCover = ({user}) => {
    const [usuario, setUsuario] = useState({})

    const { id } = useParams();

    const { userLogin: { uid } } = useContext(PlaceContext)
    console.log(uid);

    const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto)


    useEffect(() => {
      setUsuario(user);
      setProfilePhoto(user.profilePhoto);
    }, [setUsuario, user])

    const handleClick =(e)=>{
        e.preventDefault();
        document.querySelector('#uploadProfilePhoto').click();
    }

    const handleFileChange = async(e)=>{
      try 
      {
        const file = e.target.files[0];

        Swal.fire({
            title: 'Uploading',
            text: 'Please wait....',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: ()=>{
                Swal.showLoading();
            }
        })

        const profilePhoto = await uploadPhoto(file);
        Swal.close();

        Swal.fire({
          imageUrl: profilePhoto,
          imageHeight: 600,
          imageAlt: 'A tall image'
        })

        const upload = await (await fetchConToken(`users/${usuario.uid}`, {profilePhoto}, 'PUT')).json();
        

        if (upload.ok)
        {
          setProfilePhoto(profilePhoto);
        }


      } catch(e) {
        console.log(e);
      }
    }
  
    
  return(
      <>  
      {  (usuario) ? 
      <div className="profile-cover" style={{backgroundImage: `url(${usuario.coverPhoto})`}}>
          <div className="shadow"></div>
          <div className="profile-avatar">
              <img src= {profilePhoto} alt="img" />
              <input id="uploadProfilePhoto" name="file" onChange={handleFileChange} type="file" style={{display:"none"}}/>
              <span className="change-photo" onClick={(uid === id) ? handleClick : null}>
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