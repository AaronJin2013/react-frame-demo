import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link,IndexLink  } from 'react-router';

export class Navigation extends React.Component<any, any> {


    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><IndexLink  to="/" activeClassName="active" activeStyle={{color: '#c00'}}>home</IndexLink></li>
                        <li><Link to="/user" activeClassName="active" activeStyle={{color: '#c00'}}>user(数据调用)</Link></li>
                        <li><Link to="/shop" activeClassName="active" activeStyle={{color: '#c00'}}>shop(延迟加载)</Link></li>
                    </ul>
                </header>
                {this.props.children}
            </div>
        );
    }
}