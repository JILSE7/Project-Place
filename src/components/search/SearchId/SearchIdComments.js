import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { fetchConToken } from '../../../helpers/fetch';


export const SearchIdComments = ({comment, placeId, comments}) => {

    //Destructuring 
    const {comment: comentario, likes, date, likeMe, user} = comment;
    console.log(typeof likes);
    const [heartComments, setHeartcomments] = useState(likes);

    const toggleHeart = (e)=>{
        try {
            const classHeart = e.target.classList;
    
            if(classHeart.contains('far')){
                console.log('hola');
                //addLike
                comments.forEach((comentario) => {
                    if(comentario._id === comment._id){
                        comentario.likeMe = true;
                        comentario.likes = Number(likes)+1;
                        setHeartcomments(Number(likes)+1) 
                        fetchConToken(`places/${placeId}`, {comments : comments}, 'PUT')
                                    .then(respuesta => {
                                        const body = respuesta.json()
                                              body
                                              .then(place => {
                                                  if(!place.ok){//si el like se actulizo con exito en la base lo mostramos en pantalla localmente
                                                    setHeartcomments((likes <=0)? 0: Number(likes)-1)
                                                    Swal.fire('Error al actualiza el comentario', 'intentalo nuevamente', 'error');
                                                  }
                                              })
                                             
                                    })
                                    .catch(error=>{
                                        Swal.fire('Error al actualizar el comentario', error, 'error');
                                    });
                        
                        console.log(comments);
                        
                    }
                });

            }else if(classHeart.contains('fas')){
                //RemoveLike
                comments.forEach((comentario, i, array) => {
                    if(comentario._id === comment._id){
                        comentario.likeMe = false;
                        comentario.likes = (likes <=0)? 0: Number(likes)-1;
                        setHeartcomments((likes <=0)? 0: Number(likes)-1)
                        fetchConToken(`places/${placeId}`, {comments : comments}, 'PUT')
                        .then(respuesta => {
                            const body = respuesta.json()
                                  body
                                  .then(place => {
                                      if(!place.ok){//si el like no se actualizo en la base, le regresamos el like que tenia anteriormente
                                        setHeartcomments(Number(likes)+1) 
                                        Swal.fire('Error al actualiza el comentario', 'intentalo nuevamente', 'error');
                                      }
                                  })
                        })
                        .catch(error=>{
                            Swal.fire('Error al actualiza el comentario', error, 'error');
                        });
                        console.log(comments);
                    }
                });
            }   
            
        } catch (error) {
            
        }
       
    }




    return (
        <div className="searchId_comments-users">
               <div className="box-user">
                    <img
                    src={user.profilePhoto}
                    className="searchId_info-user-img me-2"
                    alt="ProfilePhoto"
                    />
                    <div className="Comment-user">
                        <p><span>{user.userName} </span>{comentario}</p>
                        {/* <p className="mt-2">{`${dateReset[0]} ${month} ${dateReset[2]}`}</p> */}
                    </div>
               </div>
                   <div className="d-flex flex-column">
                    <i  onClick={(e)=> toggleHeart(e)} className={`${(likeMe) ?  "fas fa-heart heart pointer" : "far fa-heart heart pointer" }`} ></i>
                    <p className="text-center">{heartComments}</p>
                   </div>
            </div>
    )
}
