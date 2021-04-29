import React from 'react'
import { SearchIdComments } from './SearchIdComments';

export const SearchidInfo = ({comments}) => {
    console.log(comments);
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
                <textarea placeholder="¿Comentario?"></textarea>
                <i class="fas fa-plus"></i>
            </div>
        </>
        
    )
}
