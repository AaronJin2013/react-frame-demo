import { ActionCreatorGeneric } from 'redux-typed';
import * as Shop from './shop';
//import * as User from './user';

// The top-level state object
export interface ApplicationState {
    //User: User.UserState,
    shops: Shop.ShopsState
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    //User: User.reducer,
    shop: Shop.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export type ActionCreator = ActionCreatorGeneric<ApplicationState>;
