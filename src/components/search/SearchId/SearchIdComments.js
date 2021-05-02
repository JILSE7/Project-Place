import React, { useEffect } from 'react'

export const SearchIdComments = ({source}) => {

    const {comment: comentario, likes} = source;
    console.log(source.userId);

    useEffect(() => {
    (source.userId === 1 )? source.userId = "Francisco Santos" : 
    (source.userId === 2 )? source.userId = "Pedro Sola" :
    (source.userId === 3 )? source.userId = "Laura Maria" : 
    (source.userId === 4 )? source.userId = "Jose Pepe" :
    (source.userId === 5 )? source.userId = "Sonora Dinamita" : source.userId = "usuario desconocido" ;
    }, [])

    
   
    return (
        <div className="searchId_comments-users">
               <div className="box-user">
                    <img
                    src="https://www.entrenamiento.com/wp-content/uploads/2018/05/gente-feliz-es-optimista-720x480.jpg"
                    className="searchId_info-user-img me-2"
                    />
                    <div className="Comment-user">
                        <p><span>{source.userId} </span>{comentario}</p>
                        <p className="mt-2">Enero 7 De 2015</p>
                    </div>
               </div>
                   <div d-flex flex-column>
                    <i class="fas fa-heart heart"></i>
                    <p className="text-center">{likes}</p>
                   </div>
            </div>
    )
}
