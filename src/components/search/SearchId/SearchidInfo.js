import React, { useContext, useEffect, useState } from 'react'

import { SearchIdComments } from './SearchIdComments';

//Proptypes
import PropTypes from 'prop-types'
import { fetchConToken } from '../../../helpers/fetch';
import { PlaceContext } from '../../../context/PlaceContext';
import Swal from 'sweetalert2';

export const SearchidInfo = ({comments, placeId}) => {
    //Context
    const {userLogin : {uid, profilePhoto, userName}} = useContext(PlaceContext)

    console.log(comments);
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
        likes: 0,
        likeMe: false,
        comment,
        date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`
    }

    const newComment = {//Este es que va a la base de datos
        user: uid,
        comment,
        likes: 0,
        likeMe: false,
        date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`
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
                    src="https://100k-faces.glitch.me/random-image"
                    className="searchId_info-user-img me-2"
                    alt="profilePhoto"
                    />
                <textarea placeholder="¿Comentario?" value={comment} onChange={handleTextAreaChange}></textarea>
                <i className="fas fa-plus pointer" onClick={()=> handleAddComment(placeId,commentsArr, newComment, setcommentsArr, setComment)} ></i>
            </div>
        </>
        
    )
}


SearchidInfo.propTypes = {
    comment: PropTypes.array,
    placeId: PropTypes.string
}