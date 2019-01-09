import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import InputConnector from './containers/InputConnector';
import * as serviceWorker from './serviceWorker';

import reducer from './store/reducer';
import { inputValidator } from './store/validators';

const store = createStore(reducer, applyMiddleware(inputValidator, thunk));

ReactDOM.render(
    (
        <Provider store={store}>
            <InputConnector />
        </Provider>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
