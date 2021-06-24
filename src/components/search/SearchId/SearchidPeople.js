import React, { memo } from 'react'

export const SearchidPeople = memo(({visitors}) => {
    
    console.log(visitors);
    return (
        <div className="searchId_info-stay">
            <h4>Han estado aqui</h4>
            <div className="searchId_info-stay-user ms-3">
                {
                    visitors.map(user =>{
                        return(
                        <img
                        src={user.profilePhoto}
                        className="searchId_info-user-img"
                        alt={user.userName}
                        title = {user.userName}
                        key={user._id}
                        />
                        

                        )
                    })
                }
            </div>
            <p>{visitors.length} {visitors.length==1 ? 'Persona' : 'Personas'} </p>
        </div>

    )
})
