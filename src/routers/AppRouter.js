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
import Layout from '../components/layout/Layout';

export const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Switch>

                    <Route exact path="/login" component={LoginScreen}/>

                    <Route path="/" component={DashBoarRoutes}/>

                </Switch>
            </Layout>
        </Router>
    )
}
