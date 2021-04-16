import React from 'react'

//Importando react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Componentes
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoarRoutes } from './DashBoarRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>

                <Route exact path="/login" component={LoginScreen}/>

                <Route path="/" component={DashBoarRoutes}/>

            </Switch>
        </Router>
    )
}
