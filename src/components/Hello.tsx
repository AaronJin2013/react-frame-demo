
import * as React from "react";
import * as ReactDOM from "react-dom";
import './Hello.scss';

export class HelloComponent extends React.Component<any, any> {
    render() {
        return <h1 className="b">Hello from {this.props.compiler} and {this.props.framework}!1o233</h1>;
    }
}