import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import regeneratorRuntime from "regenerator-runtime";

import reducers from '../reducers';
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

// Redux DevTools debug information
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store} >
            { children }
        </Provider>
    );
}