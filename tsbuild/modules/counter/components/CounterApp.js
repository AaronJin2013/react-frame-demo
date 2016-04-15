var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require("react");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var counterActions_1 = require("../actions/counterActions");
var RootStore_1 = require("../stores/RootStore");
const store = RootStore_1.configStore();
class CounterAppContainer extends React.Component {
    render() {
        return (React.createElement(react_redux_1.Provider, {"store": store}, React.createElement(CounterApp, null)));
    }
}
exports.CounterAppContainer = CounterAppContainer;
const mapDispatchToProps = dispatch => ({
    actions: redux_1.bindActionCreators(counterActions_1.counterActions, dispatch)
});
let CounterApp = class extends React.Component {
    render() {
        const { actions, counter } = this.props;
        return (React.createElement("div", null, React.createElement("button", {"onClick": actions.dec}, "-"), React.createElement("span", {"onDoubleClick": actions.reset}, counter), React.createElement("button", {"onClick": actions.inc}, "+"), "32154232"));
    }
};
CounterApp = __decorate([
    react_redux_1.connect(state => state, mapDispatchToProps), 
    __metadata('design:paramtypes', [])
], CounterApp);
