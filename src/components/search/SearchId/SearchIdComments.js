import React, { useState } from 'react'
import { fakeName, resetDate } from '../../../helpers/Conditionals';
import { toggleHeart } from '../../../helpers/Patch';

export const SearchIdComments = ({comment, placeId, comments}) => {
    //Destructuring 
    const {comment: comentario, likes, profilePhoto, date, likeMe} = comment;

    const [heartComments, setHeartcomments] = useState(likes)

    


        

    //Simulando usuarios
    let usuario = fakeName(comment.userId);

    //Reset de la fecha
    const dateReset = date.split('/');

    let month = resetDate(dateReset);
   

    return (
        <div className="searchId_comments-users">
               <div className="box-user">
                    <img
                    src={profilePhoto}
                    className="searchId_info-user-img me-2"
                    alt="ProfilePhoto"
                    />
                    <div className="Comment-user">
                        <p><span>{usuario} </span>{comentario}</p>
                        <p className="mt-2">{`${dateReset[0]} ${month} ${dateReset[2]}`}</p>
                    </div>
               </div>
                   <div className="d-flex flex-column">
                    <i  onClick={(e)=> toggleHeart(e, likes, placeId, comment, comments, setHeartcomments)} className={`${(likeMe) ?  "fas fa-heart heart pointer" : "far fa-heart heart pointer" }`} ></i>
                    <p className="text-center">{heartComments}</p>
                   </div>
            </div>
    )
}
