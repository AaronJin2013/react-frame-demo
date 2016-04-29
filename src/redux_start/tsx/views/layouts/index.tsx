import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import * as Components from '../../components';

export class View extends React.Component<any, any> {
    render() {
        return (
            <div>
                <header>
                   header
                </header>
                <Components.Navigation />
                {this.props.children}
                <footer>
                    footer
                </footer>
            </div>
        );
    }
}