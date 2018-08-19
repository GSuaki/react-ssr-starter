import React from "react";
import createHistory from 'history/createBrowserHistory';

import { hydrate } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import createStore from "../store";
import Layout from "../components/Layout";

import '../styles/index.scss';

const store = window.store || createStore( window.REDUX_DATA );
const browserHistory = window.browserHistory || createHistory();

hydrate( 
    <ReduxProvider store={ store }>
        <Router>
            <Layout />
        </Router>
    </ReduxProvider>, 
    document.getElementById( "app" ) 
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store || !window.browserHistory) {
        window.browserHistory = browserHistory;
        window.store = store;
    }
}