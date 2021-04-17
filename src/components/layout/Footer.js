import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/plcs-white.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">
          <div className="col">
            <img src={logo} class="pb-4 img-fluid" alt="logo" />
            <p>Copyright © 2021 PLCS Place.</p>
            <p>All rights reserved</p>
          </div>
          <div className="col">
            <h5 className="pb-3">Compañia</h5>
            <Link to="/notfound" className="text-white" ><p>About us</p></Link>
            <Link to="/notfound" className="text-white" ><p>Blog</p></Link>
            <Link to="/notfound" className="text-white" ><p>Contact us</p></Link>
            <Link to="/notfound" className="text-white" ><p>Pricing</p></Link>
            <Link to="/notfound" className="text-white" ><p>Testimonials</p></Link>
          </div>
          <div className="col">
            <h5 className="pb-3">Ayuda</h5>
            <Link to="/notfound" className="text-white" ><p>Help center</p></Link>
            <Link to="/notfound" className="text-white" ><p>Terms of service</p></Link>
            <Link to="/notfound" className="text-white" ><p>Legal</p></Link>
            <Link to="/notfound" className="text-white" ><p>Privacy policy</p></Link>
            <Link to="/notfound" className="text-white" ><p>Status</p></Link>
          </div>
          <div className="col">
            <h5 className="pb-3">Explora</h5>
            <Link to="/login" className="text-white" ><button type="button" className="btn btn-secondary">Login</button></Link>
            <Link to="/signup" className="text-white" ><button type="button" className="btn btn-primary ml-2">Sign up</button></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
