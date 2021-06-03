import React, { useState, useContext } from 'react'
import { PlaceContext } from '../../context/PlaceContext';
import {startLogin} from '../../helpers/auth'
import Swal from 'sweetalert2';


const LoginScreen = (props) => {

    const {setUserLogin, userLogin } = useContext(PlaceContext);
    
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleInput = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = async(event) => {
        //Realizando el login
        event.preventDefault();
        const login = await startLogin(form.email, form.password)
        
        //Si el login se realiza correctamente
        if(login.ok){
        localStorage.setItem('token', login.token);
        localStorage.setItem('token-creacion', new Date().getTime());
        //Estableciendo el usuario en el estado global
        setUserLogin({
          checking: false,
          uid: login.uid,
          userName: login.userName,
          profilePhoto: login.profilePhoto
          });
          //Si existe un error
         }else if(login.msg){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title : login.msg, 
                showConfirmButton : false,
                timer: 2000,
                padding: '3em',
                background: '#fff',
                backdrop: `
                    rgba(0,0,123,0.4)
                    left top
                    no-repeat
                `
                });
        }else if(login.errors){
            Swal.fire({
            position: 'center',
            icon: 'error',
            title : login.errors.password.msg, 
            showConfirmButton : false,
            timer: 2000,
            padding: '3em',
            background: '#fff',
            backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat`
            })
        } 


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
