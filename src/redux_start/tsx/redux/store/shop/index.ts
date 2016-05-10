//import { fetch } from 'domain-task/fetch';
const fetch=window.fetch;
import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { ActionCreator } from '../';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ShopsState {
    isLoading: boolean;
    startDateIndex: number;
    shops: Shop[];
}

export interface Shop {
    id:number
    name:string,
    address:string,
    telephone:string
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

@typeName("REQUEST_SHOP")
class RequestShops extends Action {
    constructor(public startDateIndex: number) {
        super();
    }
}

@typeName("RECEIVE_SHOP")
class ReceiveShops extends Action {
    constructor(public startDateIndex: number, public shops: Shop[]) {
        super();
    }
}

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestshops: (startDateIndex: number): ActionCreator => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        if (startDateIndex !== getState().shops.startDateIndex) {

            var data = new FormData();
            data.append( "json", JSON.stringify( {
                startDateIndex:startDateIndex
            } ) );
            //data.append('type', 'file');
            //data.append('image', blob);

            fetch('/json/shop.json',{
                method: "POST",
                body: data
            })
                .then(response => response.json())
                .then((data: Shop[]) => {
                    dispatch(new ReceiveShops(startDateIndex, data));
                });

            dispatch(new RequestShops(startDateIndex));
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const unloadedState: ShopsState = { startDateIndex: null, shops: [], isLoading: false };
export const reducer: Reducer<ShopsState> = (state, action) => {
    if (isActionType(action, RequestShops)) {
        return { startDateIndex: action.startDateIndex, isLoading: true, shops: state.shops };
    } else if (isActionType(action, ReceiveShops)) {
        // Only accept the incoming data if it matches the most recent request. This ensures we correctly
        // handle out-of-order responses.
        if (action.startDateIndex === state.startDateIndex) {
            return { startDateIndex: action.startDateIndex, shops: action.shops, isLoading: false };
        }
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    // (or default initial state if none was supplied)
    return state || unloadedState;
};
