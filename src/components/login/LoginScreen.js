import React from 'react'
        
const LoginScreen = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                        <h3 class="display-4">Hola de nuevo!</h3>
                        <p class="text-muted mb-4">Explora y comparte lugares extraordinarios.</p>
                        <form>
                            <div class="form-group mb-3">
                                <input id="inputEmail" type="email" placeholder="Email address" required autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                            </div>
                            <div class="form-group mb-3">
                                <input id="inputPassword" type="password" placeholder="Password" required class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                                <input id="customCheck1" type="checkbox" class="custom-control-input" />
                                <label for="customCheck1" class="custom-control-label">Recordar contraseña</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Log In</button>
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
