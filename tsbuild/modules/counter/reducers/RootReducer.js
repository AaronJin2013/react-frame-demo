var ActionType = require("../constants/ActionTypes");
function RootReducer(state, action) {
    switch (action.type) {
        case ActionType.IncCounter:
            return { counter: state.counter + 1 };
        case ActionType.DesCounter:
            return { counter: state.counter - 1 };
        case ActionType.RstCounter:
            return { counter: 0 };
    }
    return state || { counter: 0 };
}
exports.RootReducer = RootReducer;
