import React from 'react'

export const SearchidImage = () => {
    return (
        <div className="searchId_img-container d-flex">
        
            <img className="searchId_img" src = "https://cdn-3.expansion.mx/27/68/6114b00a4c909d0e55cd9479e5b4/angel-de-la-independencia.jpeg" />
            <div className="searchId_img-info">
                <div className="searchId_img-info-social">
                    <i class="far fa-thumbs-up fa-2x"></i>
                    <p>65</p>
                </div>
                <div className="searchId_img-info-social">
                    <i class="fas fa-angle-double-down fa-2x"></i>
                    <p>3500</p>
                </div>
                <div className="searchId_img-info-social">
                    <i class="far fa-comment-dots icon fa-2x"></i>
                    <p>220</p>
                </div>
            </div>
            
        </div>
    )
}
