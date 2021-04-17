import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          PLCS
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/search" className="nav-link"> Lugares</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link"> Experiencias</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link"> Blog</Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login"><button className="btn btn-secondary" type="button">Login</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/signup"><button className="btn btn-primary ml-2" type="button">Sign up</button></Link>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  )
}

export default Header;
