var React = require("react");
require('./Hello.scss');
class HelloComponent extends React.Component {
    render() {
        return React.createElement("h1", {"className": "b"}, "Hello from ", this.props.compiler, " and ", this.props.framework, "!1o23");
    }
}
exports.HelloComponent = HelloComponent;
