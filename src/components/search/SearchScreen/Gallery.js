import React from "react";
import FotoCard from "./FotoCard";
import PropTypes from "prop-types";

const Gallery = (props) => {
  return (
    <div className="container-fluid p-3 row justify-content-center">
      {props.fotos.map((foto, index) => {
        return <FotoCard dataSource={foto} key={index}></FotoCard>;
      })}
    </div>
  );
};

Gallery.propTypes = {
  fotos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      owner: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  )
};

export default Gallery;