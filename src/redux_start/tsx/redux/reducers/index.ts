import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const Reducers = combineReducers({
    routing: routerReducer
});