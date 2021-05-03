import React from "react";
import FotoCard from "./FotoCard";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const Gallery = ({places}) => {

  const mezclarArreglo = arreglo => {
    for (let i = arreglo.length - 1; i > 0; i--) {
      let indiceAleatorio = Math.floor(Math.random() * (i + 1));
      let temporal = arreglo[i];
      arreglo[i] = arreglo[indiceAleatorio];
      arreglo[indiceAleatorio] = temporal;
    }
  }

  mezclarArreglo(places)
  return (
    <div className="container-fluid p-3 row justify-content-center">
      {places.map(place => {
        const hola = Math.floor(Math.random()* 50);
        return <FotoCard dataSource={place} key={place.id} id= {hola}></FotoCard>;
      })}
    </div>
  );
};

Gallery.propTypes = {
  fotos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      owner: PropTypes.string,
      ownerPhoto: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  )
};

export default Gallery;