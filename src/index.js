import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// TODO: Create four reducers

const storeInstance = createStore(
    combineReducers(
        {

            // Reducer 1

            // Reducer 2

            // Reducer 3

            // Reducer 4
        }
    )
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);




