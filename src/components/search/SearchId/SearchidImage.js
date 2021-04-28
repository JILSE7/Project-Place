import React from 'react'

export const SearchidImage = () => {
    return (
        <div className="searchId_img-container d-flex">
        
            <img className="searchId_img" src = "https://cdn-3.expansion.mx/27/68/6114b00a4c909d0e55cd9479e5b4/angel-de-la-independencia.jpeg" />
            <div className="searchId_img-info">
                <div className="searchId_img-info-social">
                <i className="far fa-smile-wink icon-social like"></i>
                    <p >65</p>
                </div>
                <div className="searchId_img-info-social">
                    <i className="far fa-surprise icon-social wonder"></i>
                    <p>65</p>
                </div>

                <div className="searchId_img-info-social">
                    <i className="fas fa-angle-double-down icon-social be"></i>
                    <p>3500</p>
                </div>
                <div className="searchId_img-info-social">
                    <i className="far fa-comment-dots icon icon-social coment"></i>
                    <p>220</p>
                </div>
            </div>
            
        </div>
    )
}
