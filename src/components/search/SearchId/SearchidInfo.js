import React, { useState } from 'react'
import { PatchEdit } from '../../../helpers/Patch';
import { SearchIdComments } from './SearchIdComments';

export const SearchidInfo = ({comments, placeId}) => {
    console.log(comments);

    const [newComment, setnewComment] = useState();
    const handleAddComment = async()=>{
        try {
            await fetch(`${URL}/places/${placeId}`, {
                method: 'PATCH',
                body: JSON.stringify(),
                headers: {
                    'Content-Type': 'application/json'
                }
                
            });
            console.log('dentro del patch')
            // window.location.href = `http://localhost:3000/search/${id}`;
        } catch (error) {
            console.log(error);
        }
    }


    const handleTextAreaChange = (e)=>{
        setnewComment([...comments])
        console.log(newComment);
        
    }
    return (
        <>
        <div className="searchId_comments">
            {
                comments.map(comment => {
                    return <SearchIdComments source ={comment}/>
                })
            }
        </div>
            <div className="searchId_comments-add">
            <img
                    src="https://www.entrenamiento.com/wp-content/uploads/2018/05/gente-feliz-es-optimista-720x480.jpg"
                    className="searchId_info-user-img me-2"
                    />
                <textarea placeholder="¿Comentario?" value={newComment} onChange={handleTextAreaChange}></textarea>
                <i class="fas fa-plus" onClick={handleAddComment} ></i>
            </div>
        </>
        
    )
}
