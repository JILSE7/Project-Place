import React, { memo, useEffect, useState } from 'react'

export const SearchidPeople = memo(({visitors}) => {
    
    console.log(visitors);
    return (
        <div className="searchId_info-stay">
            
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
            <p>& {visitors.length} personas mas......</p>
        </div>

    )
})
