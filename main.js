import ReactDOM from 'react-dom';
import React from 'react';
import Container from './src/pages/PostListPage/Container'
import { Provider } from 'react-redux';
import store from './src/store/configurateState'

import './src/style/style.css';

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
document.getElementById('root')
);