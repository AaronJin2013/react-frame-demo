import * as React from 'react'
import { Route, IndexRoute } from 'react-router'

import * as Layout from './layouts'
import * as Home from './home'
import * as User from './user'
import * as Shop from './shop'
import * as Components from '../components';


export const route = [
    {
        path: '/',
        component: Layout.View,
        indexRoute: {component: Home.View},
        childRoutes: [
            {path: 'user', component: User.View},
            Shop.route()
        ],
    }
];
// {Views.Routes(store)}