var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var HelloComponent = (function (_super) {
    __extends(HelloComponent, _super);
    function HelloComponent() {
        _super.apply(this, arguments);
    }
    HelloComponent.prototype.render = function () {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    };
    return HelloComponent;
})(React.Component);
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=Hello.js.map