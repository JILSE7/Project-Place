import React from 'react'

const RegisterScreen = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 d-none d-md-flex bg-image--signin"></div>
        <div class="col-md-6 bg-light">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">
                  <h3 class="display-4">Bienvenido!</h3>
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
                        <label for="customCheck1" class="custom-control-label">Acepta nuestros Términos y Condiciones y Aviso de Privacidad</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign up</button>
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
