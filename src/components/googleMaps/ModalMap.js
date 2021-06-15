import React, { useState } from 'react';
import Modal from 'react-modal';
import { uploadPhoto } from '../../helpers/maps';
import { Mapa } from './GoogleMap';
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';

import { MdLibraryAdd, MdUpdate } from "react-icons/md";
import { TagsInput } from "react-tag-input-component";

const customStyles = {
    content : {
      top                   : '55%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      overflowY            : "scroll"
    }
  };
  
  Modal.setAppElement('#root');

export const ModalMap = ({userLogin, modalOpen, setmodalOpen, post, update, setuserPost}) => {
    console.log(userLogin);
    
  const initialState = {
    place: "",
    description:"",
    image:null,
    address: "",
    city: "",
    country: "",
    likes:[],
    visitors:[],
    comments:[],
    tags:[],
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 19.419663619235017,
      lng: -99.18948798974584
      
    },
    marketPosition: {
      lat:19.419663619235017,
      lng: -99.18948798974584
    },
    date: Date.now()
  }
    
    
    //maps
    const [newPlace, setnewPlace] = useState((post)? post : initialState);
    const [inputTags, setInputTags] = useState([]);

    //Inputs
    const {place,description} = newPlace;
    //Capturando los campos
    const handleInputChange = (e)=>{
        setnewPlace({
            ...newPlace,
            [e.target.name] : e.target.value,
            user: userLogin.uid
        })
    }

    const handleCloseModal = ()=>{
        setmodalOpen(false)
    }
    const handleClick =(e)=>{
        e.preventDefault();
        document.querySelector('#uploadPhoto').click();
    }

    const handleFileChange = async(e)=>{
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
        const imageURL = await uploadPhoto(file);

        Swal.close();


        setnewPlace({
            ...newPlace,
            image: imageURL
        })
    }

    const handleSubtmitPlace = (e)=>{
        e.preventDefault();
        try {
            //addNewPlace(newPlace)
             fetchConToken('places/',newPlace,'POST');
            Swal.fire("Excelente, Nuevo Place Agregado", place.place, 'success')
            setnewPlace(initialState);
            handleCloseModal();
        } catch (error) {
            console.log(error);
            Swal.fire("Error", error, 'error')
        }

    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

      try {
        //addNewPlace(newPlace)
         fetchConToken(`places/${post._id}`,newPlace,'PUT');
        Swal.fire("Excelente, Place Actualizado", place.place, 'success')
        setnewPlace(initialState);
        handleCloseModal();

        setTimeout(() => {
            window.location.reload();   
        }, 800);
        
    } catch (error) {
        console.log(error);
        Swal.fire("Error", error, 'error')
    }

    //modifcar

    /* const withOutPost = userLogin.posts.filter(publicacion => publicacion._id != post._id);
    setuserPost([...withOutPost, newPlace])
 */

    }
  
    return (
        <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
          <input className="google__placeName" placeholder="Nombre del nuevo lugar" name="place" value={place} onChange={handleInputChange}/>
          <hr />
          <form className="container" onSubmit={(!update) ? handleSubtmitPlace : handleUpdateSubmit}>


        { (newPlace.image !== null)? 
            
            (
            <div>
                <div>
                    <div className="d-flex justify-content-center google_newImage">
                    <img src={newPlace.image} className="google__image" alt={"Nueva imagen"} />
                    </div>
                    <div className="form-group">
                        <textarea 
                            type="text" 
                            className="form-control w-100"
                            placeholder="¿Algún comentario sobre tu foto?"
                            rows="2"
                            name="description"
                            value={description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <TagsInput
                        value={inputTags}
                        //onChange={setInputTags}
                        name="inputTags"
                        placeHolder="Agrega algún tag"
                        className="form-control"
                        onChange={handleInputChange}
                        style={{marginTop:'10px'}}
                    />
                    <em style={{margin:'5px'}}>Presiona la tecla Enter para agregar un nuevo tag</em>

                    <div style={{marginTop:'20px'}}>
                        <div className="form-group">
                            <label> <i className="fas fa-map-marker-alt search-icon"></i> Address: {newPlace.address}</label>
                        </div>

                        <div className="form-group">
                            <label> <i className="fas fa-city search-icon"></i> City: {newPlace.city}</label>
                            <p></p>
                        </div>

                        <div className="form-group">
                            <label><i className="fas fa-globe-americas search-icon"></i> Country: {newPlace.country}</label>
                        </div>
                    </div>
                </div>
                
                <Mapa newPlace={newPlace} setnewPlace={setnewPlace} pin= {true}/>
                {
                    (!update) ? 
                        (<button
                            type="submit"
                            className="btn btn-outline-success guardar"
                        >
                            <MdLibraryAdd/>

                            <span> Agregar nuevo lugar</span>
                        </button>)  
                              :

                        (<button
                            type="submit"
                            className="btn btn-outline-success guardar"
                        >
                            <MdUpdate/>

                            <span> Actualizar</span>
                        </button>)  
                                
                }
            </div>
            )

            :
            (<>
                <input id="uploadPhoto" name="file" onChange={handleFileChange} type="file" style={{display:"none"}}/>
                <div className=" d-flex justify-content-center "><button className="btn btn-success" onClick={handleClick}> CargarFoto</button></div>
            </>)
        }
       


    

   

</form>

   
       
        </Modal>
    )
}
