import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // added for debuggin/visibility of state/payloads

// TODO: Create four reducers

const feeling = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
};

const understanding = (state = [], action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
};

const support = (state = [], action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
};

const comments = (state = [], action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
};

const storeInstance = createStore( // creates store to house reducers
    combineReducers(
        {
            // Reducer 1
            feeling: feeling,

            // Reducer 2
            understanding: understanding,
        
            // Reducer 3
            support: support, 

            // Reducer 4
            comments: comments
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




