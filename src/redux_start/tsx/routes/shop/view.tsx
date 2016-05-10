import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link,IndexLink  } from 'react-router';


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
            {this.props.children}
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
    component: IndexView
};

class ListView extends React.Component<any, any> {

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
        </div>;;
    }
};

export const List ={
    path: 'list',
    component: ListView
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
    component: DetailView
};