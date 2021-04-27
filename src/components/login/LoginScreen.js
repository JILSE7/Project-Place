import React, { useState, useContext } from 'react'
import { PlaceContext } from '../../Context/PlaceContext';

const LoginScreen = (props) => {

    const { verifyUser, userData } = useContext(PlaceContext);
    console.log(verifyUser, userData);
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleInput = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        //console.log(form.email);
        verifyUser(form);
        props.history.push('/');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Hola de nuevo!</h3>
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
                                <div className="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" className="custom-control-input" />
                                    <label htmlFor="customCheck1" className="custom-control-label">Recordar contraseña</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Log In</button>
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

export default LoginScreen;
