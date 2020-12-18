// const arr = [1, 2, 3];
// const result = () => console.log(...arr);
// // check console - Destructuring assignment is a cool feature that came along with ES6
// result();

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
