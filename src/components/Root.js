import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import regeneratorRuntime from "regenerator-runtime";

import reducers from '../reducers';
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store} >
            { children }
        </Provider>
    );
}