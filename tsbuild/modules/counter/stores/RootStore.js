var RootReducer_1 = require("../reducers/RootReducer");
var createStore_1 = require("../../../helpers/createStore");
function configStore() {
    const store = createStore_1.createStore(RootReducer_1.RootReducer);
    if (typeof module !== "undefined" && module.hot) {
        module.hot.accept("../reducers/RootReducer", () => {
            const nextRootReducer = require('../reducers/RootReducer');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
exports.configStore = configStore;
