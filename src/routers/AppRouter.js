import React, { useContext, useEffect } from 'react'

//Importando react-router-dom
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

//Componentes
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/login/RegisterScreen';
import Layout from '../components/layout/Layout';
import { DashBoarRoutes } from './DashBoarRoutes';
import { startChecking } from '../helpers/auth';
//Context
import { PlaceContext } from '../context/PlaceContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    //Context
  const {setUserLogin, userLogin } = useContext(PlaceContext);
  const  {uid, checking}  = userLogin;

    useEffect(() => {

        setUserLogin({checking: true});

         startChecking()
                    .then(resp => {
                        setUserLogin({
                            checking: false,
                            ...resp
                        })
                    })
                    .catch(console.log())
    }, [setUserLogin]);


    if(checking){
        return (<div>
                            <div class="sk-folding-cube">
                                            <div class="sk-cube1 sk-cube"></div>
                                            <div class="sk-cube2 sk-cube"></div>
                                            <div class="sk-cube4 sk-cube"></div>
                                            <div class="sk-cube3 sk-cube"></div>
                            </div>
                                            </div>)
    }

    /**
     Nota: Cada que alguien se registra o autentica, su uid se va directo al context y en la linea 24 lo extraemos, ya que sera la manera de saber que estamos autenticados en la app
     uid: es un string y para que funcione debemos convertirlo a booleano
     para convertirlo a bolean un string se hace con la doble negacion
     uid = 4554d54ds54sddsfh;
     !uid = false
     !!uid = true ************
     pero si fuera null nuestro uid, (en caso de que no estemos logeados o nuestro token haya expirado)
     uid = null;
     !!uid = false; *********
     */


    return (
        <Router>
            <Layout>
                <Switch>
                    <PublicRoute exact path="/login" IsAunthenticated = {!!uid} component={LoginScreen}/>
                    <PublicRoute exact path="/signup" IsAunthenticated = {!!uid} component={RegisterScreen}/>
                    <PrivateRoute path="/" IsAunthenticated = {!!uid}  component={DashBoarRoutes}/>
                </Switch>
            </Layout>
        </Router>
    )
}
