import React from 'react'

export const AddNewFab = ({setmodalOpen}) => {
    const handleOpenModal = ()=>{
        setmodalOpen(true)
    }
    return (
        <button
        className="btn btn-primary fabs"
        onClick={handleOpenModal}
        >
            <i className="fas fa-camera-retro"></i>
        </button>
    )
}
