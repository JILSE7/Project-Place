import React, { useState, useEffect } from 'react';

import hero from '../../assets/hero-Fullwidth.png'

const PlaceScreen = () => {
  const [statesMexico,setStatesMexico] = useState([]);
  const [placesMexico,setPlacesMexico] = useState([]);

  useEffect(() => {
    setStatesMexico(['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila de Zaragoza',
    'Colima','Ciudad de México','Durango','Guanajuato','Guerrero','Hidalgo','Jalisco','Estado de Mexico','Michoacan de Ocampo','Morelos',
    'Nayarit','Nuevo Leon','Oaxaca','Puebla','Queretaro de Arteaga','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas',
    'Tlaxcala','Veracruz de Ignacio de la Llave','Yucatan','Zacatecas']);

    setPlacesMexico(['Parque', 'Museo', 'Edificio', 'Estatua', 'djdnf', 'fuhdf']);
  }, [])

  return (
    <>
      <div className="container pt-3 search">
        <div className="input-group">
          <select className="custom-select" id="inputGroupSelect04">
            <option defaultValue>Choose...</option>
            {
              statesMexico.map((stateMexico,index) => <option value={index} key={index}>{stateMexico}</option>)
            }
          </select>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Buscar</button>
          </div>
        </div>
        <h1>DESCUBRE <br/> NUEVOS LUGARES</h1>
        <img src={hero} alt='hero' className='img-fluid' />
      </div>

      <div className="hero">
        <section>
          <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04">
              <option defaultValue>Choose...</option>
              {
                statesMexico.map((stateMexico,index) => <option value={index} key={index}>{stateMexico}</option>)
              }
            </select>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">Buscar</button>
            </div>
          </div>
        </section>
        <h1>DESCUBRE <br/> NUEVOS LUGARES</h1>
      </div>

      <div className="container">
        <section className='py-5'>
          <h2>Lugares más visitados en México</h2>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            {
              placesMexico.map((placeMexico, index) => {
                if(index < 4){
                  return (
                    <div class="col">
                      <div class="card border-light">
                        <img class="card-img-top" src="https://i2.wp.com/foodandpleasure.com/wp-content/uploads/2020/08/cenote-ik-kil-mexico.jpg?fit=1024%2C680&ssl=1" alt={placeMexico} />
                        <div class="card-body">
                          <p class="card-text">{placeMexico} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
        </section>

        <section className='py-5'>
          <h2>Lugares agregados recientemente</h2>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
            {
              placesMexico.map((placeMexico, index) => {
                if(index < 4){
                  return (
                    <div class="col">
                      <div class="card border-light">
                        <img class="card-img-top" src="https://i2.wp.com/foodandpleasure.com/wp-content/uploads/2020/08/cenote-ik-kil-mexico.jpg?fit=1024%2C680&ssl=1" alt={placeMexico} />
                        <div class="card-body">
                          <p class="card-text">{placeMexico} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
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
              <img src="" className="img-fluid" alt='arrow' />
            </div>
            <div className="col-lg-3 col-md-5 col-7">
              <img src="" className="img-fluid" alt='photoshare' />
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="row row-cols-md-2 row-cols-1">
            <div className='col'>
              <h3 className="py-3">Explora</h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" class="img-fluid" alt='' />
            </div>
            <div className='col'>
              <h3 className="py-3">Visita</h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" class="img-fluid" alt='' />
            </div>
            <div className='col'>
              <h3 className="py-3">Comenta </h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" class="img-fluid" alt='' />
            </div>
            <div className='col'>
              <h3 className="py-3">Comparte </h3>
              <img src="https://s3-us-west-1.amazonaws.com/tipsparatuviaje/wp-content/uploads/2016/09/4.-Huasteca-Potosina-San-Luis-Potos%C3%AD.jpg" class="img-fluid" alt='' />
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

export default PlaceScreen;
