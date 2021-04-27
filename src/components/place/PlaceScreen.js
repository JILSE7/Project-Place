import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PlaceContext } from '../../Context/PlaceContext';
import { Link } from 'react-router-dom';

import Hero from './placeComponents/PlaceHero';
import Card from './placeComponents/PlaceCard';

import arrow from '../../assets/arrow.png';
import photo from '../../assets/photo.png';



import newsletter from '../../assets/newsletter.svg';




 

const PlaceScreen = () => {

  const { statesMexico, placesMexico } = useContext(PlaceContext);
  console.log(statesMexico, placesMexico);


  return (
    <div>

      <Hero statesMexico={statesMexico} />
      
      <div className="container">
        <section className='py-5'>
          <h2>Lugares más populares</h2>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            {
              placesMexico.map((placeMexico, index) =>  <Card place={placeMexico.place} description={placeMexico.description} key={index} />)
            }
          </div>
        </section>

        <section className='py-4'>
          <h2>Lugares agregados recientemente</h2>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            {
              placesMexico.map((placeMexico, index) => <Card place={placeMexico.place} description={placeMexico.description} key={index} />) 
            }
          </div>
        </section>

        <section className='py-4'>
          <h2>Lugares que les gusta a la comunidad</h2>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            {
              placesMexico.map((placeMexico, index) => <Card place={placeMexico.place} description={placeMexico.description} key={index} />)
            }
          </div>
        </section>

        <section className="calltoaction bg-primary text-white">
          <div className="row">
            <div className="p-4 col-lg-6 col-md col order-md-first order-last">
              <h3>Comparte tus lugares<br/> favoritos con nosotros</h3>
              <Link to="/signup">
                <button className="btn btn-secondary btn-lg">Regístrate</button>
              </Link>
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
          <h3>Suscríbete a nuestro newsletter</h3>
          <div className="row py-4">
            <div className="col-md">
              <form>
                <div class="form-group">
                    <label for="inputEmail">Correo electrónico</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label for="inputFirstName">Nombre</label>
                    <input type="firstName" class="form-control" id="inputFirstName" placeholder="Nombre" required />
                </div>
                <div class="form-group">
                    <label for="inputLastName">Apellido</label>
                    <input type="lastName" class="form-control" id="inputLastName" placeholder="Apellido" required />
                </div>
                <div class="form-group">
                    <label for="inputCountry">País</label>
                    <input type="country" class="form-control" id="inputCountry" placeholder="País" required />
                </div>
                <div class="form-group">
                    <label class="form-check-label"><input type="checkbox" /> Acepta nuestros Términos y Condiciones y Aviso de Privacidad</label>
                </div>
                <button type="submit" class="btn btn-primary">Suscribirse</button>
              </form>
            </div>
            <div className="col-md">
              <img src={newsletter} alt="" className="img-fluid"/>
            </div>
          </div>
        </section>
      </div>

      <div className='bg-primary text-white text-center jumbotron jumbotron-fluid'>
        <div className='container'>
          <h2>Visita y descubre lugares que <br/> no sabías que existian</h2>
          <Link to="/signup">
            <button type="button" className="mt-5 btn btn-secondary btn-lg">Regístrate</button>
          </Link>
        </div>
      </div>

          
    </div>
  )
}

PlaceScreen.propTypes = {
  statesMexico: PropTypes.array.isRequired,
  placesMexico: PropTypes.array.isRequired,
  arrow: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}

export default PlaceScreen;
