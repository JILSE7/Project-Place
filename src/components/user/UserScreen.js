import React, { memo, useContext, useEffect, useState } from "react";
import ProfileCover from './ProfileCover';
import { ProfileMenu } from './ProfileMenu';
import { ProfilePostsList } from './ProfilePostsList';
import { PlaceContext } from '../../context/PlaceContext';
import { useParams } from 'react-router'
import { ModalMap } from "../googleMaps/ModalMap";
import { AddNewFab } from "../layout/layoutComponents/AddNewFab";
import { fetchConToken } from "../../helpers/fetch";



  

export  const UserScreen = memo(() => {
    //UserContext
    const {userLogin} = useContext(PlaceContext);
    const [userPost, setuserPost] = useState([])
    const {id} = useParams();

    
    useEffect(() => {
        
        const getUser = async() => await (await fetchConToken(`users/${id}`)).json();
        
        getUser()
        .then(({user}) => setuserPost([user]))
        .catch(console.log())
        
    }, [id,userLogin.uid])
    
    
    //modal
    const [modalOpen, setmodalOpen] = useState(false)

    return (
        <React.Fragment>
            <section className="user-profile-section">
                <div className="user-profile-container">
                    <ProfileCover user = {userPost} />
                    <ProfileMenu />
                </div>
            </section>

            <ProfilePostsList user = {userPost} />
            <ModalMap userLogin={userPost}  modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
            {(userLogin.uid === id) && <AddNewFab  setmodalOpen={setmodalOpen}/>}

           
        </ React.Fragment>
    )
});
