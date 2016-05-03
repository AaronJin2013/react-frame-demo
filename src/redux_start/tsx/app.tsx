import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, Link, hashHistory,browserHistory } from 'react-router';
import { configStore } from './redux';
import * as Views from './views';


const store = configStore();
//
//const store = createStore(appReducer, initialState);
const history = syncHistoryWithStore(hashHistory, store);
//html5 mode
//const history = syncHistoryWithStore(browserHistory, store);

export class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}  routes={Views.Routes}>
                </Router>
            </Provider>
        );
    }
}
