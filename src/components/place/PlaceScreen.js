import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Hero from './placeComponents/PlaceHero';
import Card from './placeComponents/PlaceCard';

import arrow from '../../assets/arrow.png';
import photo from '../../assets/photo.png';

import { PlaceContext } from '../../context/PlaceContext';

const PlaceScreen = () => {
  const { statesMexico, placesMexico } = useContext(PlaceContext);
  console.log(statesMexico)
  console.log(placesMexico)

  return (
    <>
      <Hero statesMexico={statesMexico} />

      <div className="container">
        <section className='py-5'>
          <h2>Lugares más visitados en México</h2>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            {
              placesMexico.map((placeMexico, index) => <Card place={placeMexico.place} description={placeMexico.description} key={index} />)
            }
          </div>
        </section>

        <section className='py-5'>
          <h2>Lugares agregados recientemente</h2>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            {
              placesMexico.map((placeMexico, index) => <Card place={placeMexico.place} description={placeMexico.description} key={index} />)
            }
          </div>
        </section>

        <section className="calltoaction">
          <div className="row">
            <div className="p-4 col-lg-6 col-md col order-md-first order-last">
              <h3>Comparte tus lugares<br/> favoritos con nosotros</h3>
              <button className="btn btn-light btn-lg">Regístrate</button>
            </div>
            <div className="col">
              <img src={arrow} className="img-fluid" alt='arrow' />
            </div>
            <div className="col-lg-3 col-md-5 col-7">
              <img src={photo} className="img-fluid" alt='photoshare' />
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="row row-cols-md-2 row-cols-1">
            <div className='col'>
              <h3 className="py-3">Explora</h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" className="img-fluid" alt='' />
            </div>
            <div className='col'>
              <h3 className="py-3">Visita</h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" className="img-fluid" alt='' />
            </div>
            <div className='col'>
              <h3 className="py-3">Comenta </h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" className="img-fluid" alt='' />
            </div>
            <div className='col'>
              <h3 className="py-3">Comparte </h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" className="img-fluid" alt='' />
            </div>
          </div>
        </section>
      </div>

      <div className='bg-primary text-center jumbotron jumbotron-fluid'>
        <div className='container'>
          <h2>Visita y descubre lugares que <br/> no sabías que existian</h2>
          <button type="button" className="mt-5 btn btn-secondary btn-lg">Regístrate</button>
        </div>
      </div>
    </>
  )
}

PlaceScreen.propTypes = {
  statesMexico: PropTypes.array.isRequired,
  placesMexico: PropTypes.array.isRequired,
  arrow: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}

export default PlaceScreen;
