import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

export class Navigation extends React.Component<any, any> {


    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="/" activeClassName="active" activeStyle={{color: '#c00'}}>home</Link></li>
                        <li><Link to="/hello" activeClassName="active" activeStyle={{color: '#c00'}}>hello</Link></li>
                        <li><Link to="/again" activeClassName="active" activeStyle={{color: '#c00'}}>again</Link></li>
                    </ul>
                </header>
                {this.props.children}
            </div>
        );
    }
}