import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export const SearchidPeople = memo(({visitors}) => {
    
    console.log(visitors);
    return (
        <div className="searchId_info-stay">
            <h4>Han estado aqui</h4>
            <div className="searchId_info-stay-user ms-3">
                {
                    visitors.map(user =>{
                        return(
                        <div className="d-flex flex-column align-items-center" >
                        <Link to={`/user/${user._id}`}>
                            <img
                                    src={user.profilePhoto}
                                    className="searchId_info-user-img"
                                    alt={user.userName}
                                    title = {user.userName}
                                    key={user._id}
                                    />
                        </Link>
                        <p style={{fontSize:"9px"}}>{user.userName}</p>
                        </div>
                        

                        )
                    })
                }
            </div>
            <p>{visitors.length} {visitors.length==1 ? 'Persona' : 'Personas'} </p>
        </div>

    )
})
