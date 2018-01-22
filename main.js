import ReactDOM from 'react-dom';
import React from 'react';
import Container from './src/pages/PostListPage/Container'
import { Provider } from 'react-redux';
import store from './src/store/configurateStore'
import { Router, Route, hashHistory } from 'react-router';

import './src/style/style.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Container}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);