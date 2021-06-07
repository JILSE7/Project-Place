import React, { useState } from 'react';
import Modal from 'react-modal';
import { uploadPhoto } from '../../helpers/maps';
import { Mapa } from './GoogleMap';
import Swal from 'sweetalert2';
import { fetchConToken } from '../../helpers/fetch';



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



export const ModalMap = ({userLogin, modalOpen, setmodalOpen}) => {

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
    const [newPlace, setnewPlace] = useState(initialState);

    //Inputs
    const {place,description} = newPlace;
    //Capturando los campos
    const handleInputChange = (e)=>{
        console.log(userLogin.uid);
        setnewPlace({
            ...newPlace,
            [e.target.name] : e.target.value,
            user: userLogin.uid
        })
        console.log(newPlace);
    }

    const handleCloseModal = ()=>{
        console.log('cerrando modal');
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
            Swal.fire("Excelente", place.place, 'success')
            setnewPlace(initialState);
            
        } catch (error) {
            console.log(error);
            Swal.fire("Error", error, 'error')
        }
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
<form className="container" onSubmit={handleSubtmitPlace}>


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
                        placeholder="Algun comentario sobre tu foto?"
                        rows="2"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                    <div>
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

                <button
                    type="submit"
                    className="btn btn-outline-success guardar"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
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
