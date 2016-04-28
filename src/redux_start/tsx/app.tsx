import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { configStore } from './redux';
import { HelloComponent,againComponent,homeComponent,Navigation } from './components';


const store = configStore();

//
//const store = createStore(appReducer, initialState);
const history = syncHistoryWithStore(hashHistory, store);

export class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Navigation}>
                        <IndexRoute component={homeComponent} />
                        <Route path="hello" component={HelloComponent} />
                        <Route path="again" component={againComponent} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
