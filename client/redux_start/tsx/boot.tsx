import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, Link, hashHistory,browserHistory } from 'react-router';
import { Store } from './redux';
import * as Routes from './routes';


const history = syncHistoryWithStore(hashHistory, Store);
//html5 mode
//const history = syncHistoryWithStore(browserHistory, store);

export class Boot extends React.Component<any, any> {
    render() {
        return (
            <Provider store={Store}>
                <Router history={history}  routes={Routes.route}>
                </Router>
            </Provider>
        );
    }
}
