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

    const { userLogin: { uid } } = useContext(PlaceContext);

    const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto);
    const [coverPhoto, setCoverPhoto] = useState(user.coverPhoto);

    useEffect(() => {
      setUsuario(user);
      setProfilePhoto(user.profilePhoto);
      setCoverPhoto(user.coverPhoto);
    }, [setUsuario, user])

    const handleClickProfilePhoto =(e)=> {
        e.preventDefault();
        document.querySelector('#uploadProfilePhoto').click();
    }

    const handleClickCoverPhoto =(e)=> {
      e.preventDefault();
      document.querySelector('#uploadCoverPhoto').click();
    }

    const handleFileChangeProfilePhoto = async(e)=> {
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
          imageWidth: 550,
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

    const handleFileChangeCoverPhoto = async(e)=> {
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

        const coverPhoto = await uploadPhoto(file);
        Swal.close();

        Swal.fire({
          imageUrl: coverPhoto,
          imageWidth: 800,
          imageAlt: 'A tall image'
        })

        console.log(usuario);

        const upload = await (await fetchConToken(`users/${usuario.uid}`, {coverPhoto}, 'PUT')).json();
        
        if (upload.ok)
        {
          setCoverPhoto(coverPhoto);
        }


      } catch(e) {
        console.log(e);
      }
    }


  return(
      <>  
      {  (usuario) ? 
      <div className="profile-cover" style={{backgroundImage: `url(${coverPhoto})`}}>
          <div className="shadow"></div>
          <div className="profile-avatar">
              <img src= {profilePhoto} alt="img" />
              <input id="uploadProfilePhoto" name="file" onChange={handleFileChangeProfilePhoto} type="file" style={{display:"none"}}/>
              <span className="change-photo" style={(uid === id) ? null: {display:"none"}} onClick={handleClickProfilePhoto}>
                  <i className="fas fa-camera"></i> 
                  <span>Cambiar foto</span>
              </span>
          </div> 

          { 
            usuario.posts !== undefined ?
              (<div className="profile-data">
                  <div className="profile-information">
                    <h4 className="profile-user">{usuario.firstName} {usuario.lastName}</h4>
                    <p className="profile-biography">{ usuario.information }</p>
                  </div>
                  {/* <h4 className="profile-user">{usuario.firstName} {usuario.lastName}</h4>
                  <p className="profile-biography">{ usuario.information }</p> */}
                  <ul className="profile-list">
                      {/* <li><h4 className="profile-user">{usuario.firstName} {usuario.lastName}</h4></li>
                      <li><p className="profile-biography">{ usuario.information }</p></li> */}
                      <li>{usuario.followers} Seguidores</li>
                      <li>{usuario.followed} Seguidos</li>
                      <li>{usuario.posts.length} Publicaciones</li>
                  </ul>
              </div>)
              : null
          }

          <div className="profile-options" style={(uid === id) ? null: {display:"none"}}>
              <input id="uploadCoverPhoto" name="file" onChange={handleFileChangeCoverPhoto} type="file" style={{display:"none"}}/>
              <span onClick={handleClickCoverPhoto}>Cambiar portada</span>
              <span><i className="fas fa-wrench"></i></span>
          </div>
      </div>
      
          : null
        }
    </>

  
  )
};

/* ProfileCover.propTypes = {
    user: PropTypes.object.isRequired
}; */

export default ProfileCover;