import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link,IndexLink  } from 'react-router';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../../redux/store';
import * as Shop  from '../../redux/store/shop';


interface RouteParams {
    startDateIndex: string;
}

export class View extends React.Component<any, any> {

    render() {
        return <div>
            <h1 className="b">
                Shop ensure in views
            </h1>
            <header>
                <ul>
                    <li>
                        <IndexLink to="/shop" activeClassName="active" activeStyle={{color: '#c00'}}>shop default
                        </IndexLink>
                    </li>
                    <li>
                        <Link to="/shop/list" activeClassName="active" activeStyle={{color: '#c00'}}>shop list</Link>
                    </li>
                </ul>
            </header>
            {this.props.body}
        </div>;
    }
}
;

class IndexView extends React.Component<any, any> {

    render() {
        return<div>
            <h1 className="b">
                Shop default
            </h1>
            {this.props.children}
        </div>;
    }
};

export const Index ={
    component: {body:IndexView}
};

class ListView extends React.Component<ShopProps, any> {

    render() {
        return<div>
            <h1 className="b">
                list
            </h1>
            <header>
                <ul>
                    <li>
                        <IndexLink to="/shop/Detail/1" activeClassName="active" activeStyle={{color: '#c00'}}>item1
                        </IndexLink>
                    </li>
                    <li>
                        <Link to="/shop/Detail/2" activeClassName="active" activeStyle={{color: '#c00'}}>item2</Link>
                    </li>
                </ul>
            </header>
            {this.props.children}
        </div>;
    }
};

const provider = provide(
    (state: ApplicationState) => state.shops, // Select which part of global state maps to this component
    Shop.actionCreators                 // Select which action creators should be exposed to this component
).withExternalProps<{ params: RouteParams }>();          // Also include a 'params' property on WeatherForecastProps
type ShopProps = typeof provider.allProps;

export const List ={
    path: 'list',
    component: {body:ListView}
};

class DetailView extends React.Component<any, any> {

    render() {
        return<div>
            <h1 className="b">
                Shop Detail
            {this.props.params.id}
            </h1>
            <Link to="/shop/goods" activeClassName="active" activeStyle={{color: '#c00'}}>goods</Link>
            {this.props.children}
        </div>;
    }
};

export const Detail ={
    path: 'Detail/:id',
    component: {body:DetailView}
};