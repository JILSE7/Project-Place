import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { PlaceContext } from '../../context/placeContext';
import InputSearch from './layoutComponents/InputSearch';

import logo from '../../assets/plcs-black.png';

const Header = (props) => {

  const {userLogin, statesMexico } = useContext(PlaceContext);

  const logout = () => {
    // setUserLogin({})
    props.history.go('/');
    props.history.push('/');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link to="/">
          <img src={logo} className="img-fluid pr-4" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/search" className="nav-link"> Lugares</Link>
            </li>
          </ul>

          <ul className="navbar-nav d-none d-md-block">
            <InputSearch statesMexico={statesMexico} />
          </ul>

          {
            userLogin.email ?
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="navbar-text">
                  Bienvenido
                </span>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {userLogin.email}
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/user">Perfil</Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={logout}>Cerrar Sesión</button>
                </div>
              </li>
            </ul>
            :
            <ul className="navbar-nav ml-auto">
              <li className="nav-item my-2 my-lg-0">
                <Link to="/login"><button className="btn btn-secondary" type="button">Login</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/signup"><button className="btn btn-primary ml-lg-2" type="button">Sign up</button></Link>
              </li>
            </ul>
          }
         
        </div>
      </nav>

    </header>
  )
}

export default withRouter(Header);
