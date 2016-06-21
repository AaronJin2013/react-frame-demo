import * as React from 'react'
import { Route, IndexRoute } from 'react-router'

import * as Layout from './layouts'
import * as Home from './home'
import Users from './user'
import User from './user/item'
//import UserAdd from './user/add'
import * as Shop from './shop'
import * as Components from '../components';


export const route = [
    {
        path: '/',
        component: Layout.View,
        indexRoute: {component: Home.View},
        childRoutes: [
            {path: 'user', component: Users},
            {path: 'user/add', component: User, routerProps:{action:'add'}},
            {path: 'user/:id', component: User, routerProps:{action:'item'}},
            {path: 'user/:id/edit', component: User, routerProps:{action:'edit'}},
            Shop.route()
        ],
    }
];
// {Views.Routes(store)}