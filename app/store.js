import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchCircuits } from "../api/api";

export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );

const storeData = ( data ) => ( {
    type: "STORE_DATA",
    data,
} );

const increaseCountData = ( ) => ( {
    type: "INCREASE_COUNT"
} );

export const fetchData = ( ) => ( dispatch ) =>
    fetchCircuits( ).then( res => dispatch( storeData( res ) ) );

export const increaseCount = ( ) => ( dispatch ) => dispatch( increaseCountData( ) );

const sessionReducer = ( state = false, action ) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};

const dataReducer = ( state = { count: 0 }, action ) => {
    switch ( action.type ) {
        case "STORE_DATA":
            return Object.assign({}, state, { circuits: action.data });
        case "INCREASE_COUNT":
            return Object.assign({}, state, {
                count: state.count + 1
            })
        default: return state;
    }
};

const reducer = combineReducers( {
    loggedIn: sessionReducer,
    data: dataReducer,
} );

export default ( initialState ) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );
