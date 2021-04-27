import React, { useState, useContext } from 'react'
import { PlaceContext } from '../../Context/PlaceContext';

const RegisterScreen = (props) => {
  const { registerUser } = useContext(PlaceContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    country: '',
    age: ''
  });

  const handleInput = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    registerUser(form);
    props.history.push('/login');
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-none d-md-flex bg-image--signin"></div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Bienvenido!</h3>
                  <p className="text-muted mb-4">Explora y comparte lugares extraordinarios.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          name="email"
                          type="email"
                          placeholder="Email address"
                          required
                          autoFocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleInput}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          name="password"
                          type="password"
                          placeholder="Password"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        />
                    </div>
                    <hr className="border border-primary my-4"/>
                    <div className="form-group mb-3">
                        <input
                          id="inputUsername"
                          name="username"
                          type="username"
                          placeholder="Username"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                          id="inputFirstName"
                          name="firstName"
                          type="firstName"
                          placeholder="First Name"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                          id="inputLastName"
                          name="lastName"
                          type="lastName"
                          placeholder="Last Name"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                          id="inputCountry"
                          name="country"
                          type="country"
                          placeholder="Country"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                          id="inputAge"
                          name="age"
                          type="number"
                          placeholder="Age"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        />
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                        <input id="customCheck1" type="checkbox" className="custom-control-input" />
                        <label htmlFor="customCheck1" className="custom-control-label">Acepta nuestros Términos y Condiciones y Aviso de Privacidad</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen;
