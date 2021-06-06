import React, { memo, useContext, useEffect, useState } from 'react'

import { SearchIdComments } from './SearchIdComments';

//Proptypes
import PropTypes from 'prop-types'
import { fetchConToken } from '../../../helpers/fetch';
import { PlaceContext } from '../../../context/PlaceContext';
import Swal from 'sweetalert2';

export const SearchidInfo = memo(({comments, placeId}) => {
    //Context
    const {userLogin : {uid, profilePhoto, userName}} = useContext(PlaceContext)


    //newComment
    const [comment, setComment] = useState();

    //Todos los comentarios
    const [commentsArr, setcommentsArr] = useState([]);

    useEffect(() => {
        setcommentsArr([...comments])
    }, [comments])
    


    const handleTextAreaChange = (e)=> setComment(e.target.value);


    const handleAddComment = async() =>{
        try {
            const newCom = await (await fetchConToken(`places/${placeId}`,{comments : [...commentsArr, newComment]}, 'PUT' )).json();
            if(newCom.ok) setcommentsArr([...commentsArr, newCommentLocal]);
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Upsss...! tu comentario tuvo un problemilla, intenta nuevamente', 'warning');
        }
        

    }


    //fecha
    const fecha = new Date();
    const newCommentLocal = {//Este es el que se muestra temporalmente
        user: {
            _id: uid,
            profilePhoto,
            userName
        },
        likes: [],
        comment,
        date: Date.now()
    }

    const newComment = {//Este es que va a la base de datos
        user: uid,
        comment,
        likes: [],
        likeMe: false,
        date: Date.now()
    }

    
    return (
        <>
        <div className="searchId_comments">
            { commentsArr.length>=1 ?
                commentsArr.map((comment, index) => {
                    return <SearchIdComments comment ={comment} placeId={placeId} comments= {commentsArr} key={index}/>
                })
                :
                <div className="searchId_Without_comments">
                    <p>Aun no tienes comentarios</p>
                    <i className="far fa-grin-beam-sweat"></i>
                </div>
            }
        </div>
            <div className="searchId_comments-add">
            <img
                    src={profilePhoto}
                    className="searchId_info-user-img me-2"
                    alt="profilePhoto"
                    />
                <textarea placeholder="¿Comentario?" value={comment} onChange={handleTextAreaChange}></textarea>
                <i className="fas fa-plus pointer" onClick={handleAddComment} ></i>
            </div>
        </>
        
    )
})


SearchidInfo.propTypes = {
    comment: PropTypes.array,
    placeId: PropTypes.string
}