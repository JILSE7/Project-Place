import React, { memo, useContext, useEffect, useState } from "react";
import ProfileCover from './ProfileCover';
import { ProfileMenu } from './ProfileMenu';
import { ProfilePostsList } from './ProfilePostsList';
import { PlaceContext } from '../../context/PlaceContext';
import { useParams } from 'react-router'
import { ModalMap } from "../googleMaps/ModalMap";
import { AddNewFab } from "../layout/layoutComponents/AddNewFab";
import { getUserById } from "../../helpers/Gets";



  

export  const UserScreen = memo(() => {
    //UserContext
    const {userLogin} = useContext(PlaceContext);
    const [userPost, setuserPost] = useState()
    const {id} = useParams();

    useEffect(() => {
        if(userLogin.id !== id){
            getUserById(id)
            .then(user => setuserPost(user))
            .catch(console.log());
            
           }else{
               console.log('perfiles iguales');
           }     
        
    }, [id,userLogin.id])
   

    //modal
    const [modalOpen, setmodalOpen] = useState(false)


    return (
        <React.Fragment>
            <section className="user-profile-section">
                <div className="user-profile-container">
                    <ProfileCover user = {(userPost) ? userPost : userLogin} />
                    <ProfileMenu />
                </div>
            </section>

            <ProfilePostsList user = {(userPost) ? userPost : userLogin} />
            <ModalMap userLogin={userLogin}  modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
            {(userLogin.id == id) && <AddNewFab  setmodalOpen={setmodalOpen}/>}

           
        </ React.Fragment>
    )
});
