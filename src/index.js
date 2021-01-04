import bsStyles from 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';
// import App from './components/App';

// module.hot.accept();

/////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Root from './components/Root';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);
