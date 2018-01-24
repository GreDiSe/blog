import ReactDOM from 'react-dom';
import React from 'react';
import Container from './src/pages/PostListPage/Container';
import PostPage from './src/pages/PostPage/Container';
import EditPost from './src/pages/EditPostPage/Container';
import AddPage from './src/pages/AddPostPage/Container'
import { Provider } from 'react-redux';
import store from './src/store/configurateStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './src/style/style.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Container}/>
                <Route path='/post/:id' component={PostPage}/>
                <Route path='/edit/:id' component={EditPost}/>
                <Route path='/add' component={AddPage}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);