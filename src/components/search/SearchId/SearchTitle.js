import React from 'react'
import PropTypes from 'prop-types'

export const SearchTitle = ({title}) => {
    return (
        <div className="searchId_info-title">
            <h1 className="search_title">{title}</h1>
            <hr/>
        </div>
    )
}


SearchTitle.propTypes = {
    title: PropTypes.string
}