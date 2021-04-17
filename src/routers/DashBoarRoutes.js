import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { PlaceScreen } from '../components/place/PlaceScreen';
import { SearchIdScreen } from '../components/search/SearchIdScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { UserScreen } from '../components/user/UserScreen';

export const DashBoarRoutes = () => {
    return (
        
        <div>
            <Switch>
                <Route exact path="/user" component={UserScreen}/>
                <Route exact path="/search" component={SearchScreen}/>
                <Route exact path="/home" component={PlaceScreen}/>
                <Route exact path="/search/:placeId" component={SearchIdScreen}/>

                {/* //Si no encuentra ninguna de las rutas, lo mandamos a nuestra pantalla Principal */}
                <Redirect to="/home"/>
            </Switch>
        </div>
      

    )
}