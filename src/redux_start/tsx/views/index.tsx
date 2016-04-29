import * as React from 'react'
import { Route, IndexRoute } from 'react-router'

import * as Layout from './layouts'
import * as Home from './home'
import * as User from './user'
import * as Shop from './shop'
import * as Components from '../components';


export function Routes(store) {
        return (
            <Route path="/" component={Layout.View}>
                <IndexRoute component={Home.View} />
                <Route path="user" component={User.View} />
                <Route path="shop" component={Shop.View} />
            </Route>
        );
}
// {Views.Routes(store)}