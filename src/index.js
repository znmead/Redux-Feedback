import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // added for debuggin/visibility of state/payloads

// TODO: Create four reducers

const storeInstance = createStore( // creates store to "stores" reducers
    combineReducers(
        {

            // Reducer 1

            // Reducer 2

            // Reducer 3

            // Reducer 4
        }),
    applyMiddleware(logger),

);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);




