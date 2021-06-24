import React, { useContext, useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { uploadPhoto } from '../../helpers/maps';
import { fetchConToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';
import { useParams } from "react-router";
import { PlaceContext } from "../../context/PlaceContext";

const ProfileCover = ({user}) => {
    const [usuario, setUsuario] = useState({})

    const { id } = useParams();

    const { userLogin: { uid } } = useContext(PlaceContext);

    console.log(user);

    const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto);
    const [coverPhoto, setCoverPhoto] = useState(user.coverPhoto);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName)
    const [information, setInformation] = useState(user.information)

    useEffect(() => {
      setUsuario(user);
      setProfilePhoto(user.profilePhoto);
      setCoverPhoto(user.coverPhoto);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setInformation(user.information);
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
          imageAlt: 'A tall image',
          showCancelButton: true,
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar'
        }).then(async(result) => {
          if (result.isConfirmed) {
            const upload = await (await fetchConToken(`users/${usuario.uid}`, {profilePhoto}, 'PUT')).json();
        
            if (upload.ok)
            {
              setProfilePhoto(profilePhoto);
            }
          }
        });

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
          imageAlt: 'A tall image',
          showCancelButton: true,
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar'
        }).then(async(result) => {
          if (result.isConfirmed) {
            const upload = await (await fetchConToken(`users/${usuario.uid}`, {coverPhoto}, 'PUT')).json();
        
            if (upload.ok)
            {
              setCoverPhoto(coverPhoto);
            }
          }
        });

      } catch(e) {
        console.log(e);
      }
    }

    const handleEditProfileInformation = async()=> {
      try {
        Swal.fire({
          title: 'Editar datos de perfil',
          html: `<input type="text" id="firstName" classN="swal2-input" placeholder="Nombre(s)" style="width: 20rem;" value="${firstName}">
          <input type="text" id="lastName" class="swal2-input" placeholder="Apellido(s)" style="width: 20rem;" value="${lastName}">
          <textarea id="information" class="swal2-input" style="width:20rem; height:10rem; padding:1rem;" placeholder="Escribe una descripción...">${information}</textarea>`,
          confirmButtonText: 'Guardar',
          showCancelButton: true,
          cancelButtonColor: '#d33',
          cancelButtonText: 'Salir',
          focusConfirm: false,
          preConfirm: () => {
            const firstName = Swal.getPopup().querySelector('#firstName').value
            const lastName = Swal.getPopup().querySelector('#lastName').value
            const information = Swal.getPopup().querySelector('#information').value
            if (!firstName || !lastName || !information) {
              Swal.showValidationMessage(`Por favor, llene toda la información solicitada`)
            }
            return { firstName: firstName, lastName: lastName, information: information }
          }
        }).then(async(result) => {
          if (result.isConfirmed) {
            const updateProfileData = await (await fetchConToken(`users/${usuario.uid}`, {firstName: result.value.firstName, lastName: result.value.lastName, information: result.value.information}, 'PUT')).json();

            if (updateProfileData.ok)
            {
              setFirstName(result.value.firstName);
              setLastName(result.value.lastName);
              setInformation(result.value.information);
            }
          }
        })
        
      } catch (e) {
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
              <input id="uploadProfilePhoto" name="file" onChange={handleFileChangeProfilePhoto} type="file" accept="image/*" style={{display:"none"}}/>
              <span className="change-photo" style={(uid === id) ? null: {display:"none"}} onClick={handleClickProfilePhoto}>
                  <i className="fas fa-camera"></i> 
                  <span>Cambiar foto</span>
              </span>
          </div> 

          { 
            usuario.posts !== undefined ?
              (<div className="profile-data">
                  <div className="profile-information">
                    <h4 className="profile-user">{firstName} {lastName}</h4>
                    <p className="profile-biography">{ information }</p>
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
              <input id="uploadCoverPhoto" name="file" onChange={handleFileChangeCoverPhoto} type="file" accept="image/*" style={{display:"none"}}/>
              <span onClick={handleClickCoverPhoto}>Cambiar portada</span>
              <span id="edit-profile-information" onClick={handleEditProfileInformation}><i className="fas fa-wrench"></i></span>
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