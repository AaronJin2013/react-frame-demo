import * as React from "react";
import * as ReactDOM from "react-dom";
//import * as fetch from "fetch";
import './again.scss';
const fetch=window.fetch;

export class againComponent extends React.Component<any, any> {

    componentDidMount() {

        fetch('/json/data.json')
            .then(function(response) {
                //console.log(response.headers.get('Content-Type'))
                //console.log(response.headers.get('Date'))
                //console.log(response.status)
                //console.log(response.statusText)
            });

    }

    render() {
        return <h1 className="b">
            again from {this.props.compiler} and {this.props.framework}!1o235444
        </h1>;
    }
}