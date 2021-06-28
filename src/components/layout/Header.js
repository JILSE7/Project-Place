import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { PlaceContext } from '../../context/PlaceContext';
import logo from '../../assets/plcs-black.png';
import { startLogout } from '../../helpers/auth';
import {Complete} from './layoutComponents/InputSearchUser';

const Header = (props) => {

  const {userLogin, setUserLogin, setPlacesFiltered, setPlaces } = useContext(PlaceContext);

  const logout = () => {
    startLogout();
    setUserLogin({checking: false});
    setPlaces([]);
  }
  console.log(window.location.pathname);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navwidth">
        <Link to="/">
          <img src={logo} className="img-fluid pr-4" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/search" className="nav-link" onClick={() => setPlacesFiltered()}> Lugares</Link>
            </li>
          </ul>

            { (window.location.pathname === "/login" || window.location.pathname === "/signup") ?
                   
              null 
              :
              (
                <ul className="navbar-nav ml-auto inputSearchUsers justify-content-center">
                <Complete history={props.history}/>
                </ul>
              ) 
            } 

          {
            userLogin.uid ?
            <ul className="navbar-nav ml-auto">
          
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {`${userLogin.userName} `}
                  {<img
                        src={userLogin.profilePhoto}
                        className="searchId_info-user-img"
                        alt={userLogin.userName}
                        />}
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to={`/user/${userLogin.uid}`}>Perfil</Link>
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
