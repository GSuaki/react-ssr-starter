import thunk from "redux-thunk";
import reducers from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, compose } from "redux";

/**
 * Init
 */
const isBrowser = typeof window !== 'undefined';

const composeEnhancers = isBrowser ? composeWithDevTools : compose;

export default ( ) => {
    const preloadedState = isBrowser && window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : {};

    return createStore(
        reducers, 
        preloadedState, 
        composeEnhancers(applyMiddleware( thunk ) )
    );
}
