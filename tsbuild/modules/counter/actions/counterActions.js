var ActionTypes = require("../constants/ActionTypes");
exports.counterActions = {
    inc() {
        return {
            type: ActionTypes.IncCounter
        };
    },
    dec() {
        return {
            type: ActionTypes.DesCounter
        };
    },
    reset() {
        return {
            type: ActionTypes.RstCounter
        };
    }
};
