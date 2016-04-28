var React = require("react");
require('./Hello.scss');
const fetch = window.fetch;
class HelloComponent extends React.Component {
    componentDidMount() {
        fetch('/json/data.json')
            .then(function (response) {
        });
    }
    render() {
        return React.createElement("h1", {"className": "b"}, "Hello from ", this.props.compiler, " and ", this.props.framework, "!1o235444");
    }
}
exports.HelloComponent = HelloComponent;
