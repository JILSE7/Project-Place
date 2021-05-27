import React, { useEffect, useState } from 'react'

import { handleAddComment } from '../../../helpers/Patch';
import { SearchIdComments } from './SearchIdComments';

//Proptypes
import PropTypes from 'prop-types'

export const SearchidInfo = ({comments, placeId}) => {


    //newComment
    const [comment, setComment] = useState();

    //comentarios
    const [commentsArr, setcommentsArr] = useState([]);

    useEffect(() => {
        setcommentsArr([...comments])
    }, [comments])
    


    const handleTextAreaChange = (e)=> setComment(e.target.value);

    //fecha
    const fecha = new Date();;
    const newComment = {
        userId: 1,
        id: Date.now(),
        profilePhoto: "https://100k-faces.glitch.me/random-image",
        likes: 0,
        likeMe: false,
        comment,
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