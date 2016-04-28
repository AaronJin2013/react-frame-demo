import { createStore as createReduxStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as createLogger from "redux-logger";
import { Reducers } from "./reducers";

const createStore = applyMiddleware(thunk, createLogger({ collapsed: true }))(createReduxStore);
    // applyMiddleware(thunk)(createReduxStore);



export function configStore() {

    const store = createStore(Reducers);

    // hot reloading
    if (typeof module !== "undefined" && module.hot) {
        module.hot.accept("./reducers", () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
