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
                //console.log(response.status)
                //console.log(response.statusText)
            });

    }

    render() {
        return <h1 className="b">
            User in views
        </h1>;
    }
}

//
//export function Routes(store) {
//    return (
//        <Route path="/" component={Layout.View}>
//            <IndexRoute component={Home.View} />
//            <Route path="user" component={User.View} />
//            <Route path="shop" component={Shop.View} />
//        </Route>
//    );
//}