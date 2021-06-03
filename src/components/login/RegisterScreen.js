import React, { useContext, useEffect, useState} from 'react'
import Swal from 'sweetalert2';
import { PlaceContext } from '../../context/PlaceContext';
import { paises, startRegister } from '../../helpers/auth';



const RegisterScreen = (props) => {
 //Context
  const {setUserLogin, userLogin, setInputSearch } = useContext(PlaceContext);
  setInputSearch(false);
  //Select Paises
  let selectCountry = '';

  const [form, setForm] = useState({
    email: '',
    password: '',
    userName: '',
    firstName: '',
    lastName: '',
    country: '',
    age: '',
    profilePhoto: "https://i.pinimg.com/originals/71/f3/51/71f3519243d136361d81df71724c60a0.png",
    coverPhoto: "https://res.cloudinary.com/dxqnlqxa1/image/upload/v1622572478/journal/Blue_Mountains_Explore_the_World_Travel_Framed_Art_Print_jmxa9h.png",
    information: 'Bienvenido a Places',
    friends: Math.floor(Math.random()*1000),
    followers:  Math.floor(Math.random()*900),
    followed: Math.floor(Math.random()*500),
    posts: []
  });

    
  const llenarSelect = (paises) => {
    paises.forEach(pais => {
        //Llenando el select
        const option = document.createElement('option');
        option.value = pais;
        option.textContent = pais;
        selectCountry.appendChild(option);
    });
  };

  
  useEffect(() => {
    selectCountry = document.querySelector('#selectCountry');
    if(selectCountry){
      llenarSelect(paises);
    }
  }, [selectCountry]);


  const handleInput = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const register = await startRegister(form);
    console.log(register);

    if(register.ok){
      localStorage.setItem('token', register.token);
      localStorage.setItem('token-creacion', new Date().getTime());
  
      setUserLogin({
          ...userLogin,
        checking: false,
        uid: register.uid,
        userName: register.userName,
        firstName: register.firstName,
        lastName: register.lastName 
        });

       }else if(register.msg){
          Swal.fire({
              position: 'center',
              icon: 'error',
              title : register.msg, 
              showConfirmButton : false,
              timer: 2000,
              padding: '3em',
              background: '#fff',
              backdrop: `
                  rgba(0,0,123,0.4)
                  left top
                  no-repeat
              `
              })
      }else if(register.errors){
        Swal.fire('Error', register.errors.password.msg, 'error')
    }

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
                          name="userName"
                          type="userName"
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
                    {/* <div className="form-group mb-3">
                        <input
                          id="inputCountry"
                          name="country"
                          type="country"
                          placeholder="Country"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        />
                    </div> */}
                    <div className="form-group mb-3">
                        <select
                          id="selectCountry"
                          name="country"
                          type="country"
                          placeholder="Country"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleInput}
                        >
                           <option value=""  select= "false" >Select your country</option>
                        </select>
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
