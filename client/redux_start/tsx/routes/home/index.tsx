import * as React from "react";
import * as ReactDOM from "react-dom";
//import * as fetch from "fetch";
const fetch=window.fetch;

export class View extends React.Component<any, any> {

    componentDidMount() {

        fetch('/json/data.json')
            .then(function(response) {
                //console.log(response.headers.get('Content-Type'))
                //console.log(response.headers.get('Date'))
                //console.log(response.statusText)
            });

    }

    render() {
        return <h1 className="b">
            home in views
        </h1>;
    }
}