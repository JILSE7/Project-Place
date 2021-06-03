import React from 'react'
import { Route, Switch } from 'react-router';
import PlaceScreen from '../components/place/PlaceScreen';
import { SearchIdScreen } from '../components/search/SearchIdScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { UserScreen } from '../components/user/UserScreen';
import NotFound from '../components/notfound/NotFound';

export const DashBoarRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={PlaceScreen}/>
                <Route exact path="/user/:id" component={UserScreen}/>
                <Route exact path="/search" component={SearchScreen}/>
                <Route exact path="/search/:placeId" component={SearchIdScreen}/>

                {/* //Si no encuentra ninguna de las rutas, lo mandamos a la pantalla 404 */}
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
