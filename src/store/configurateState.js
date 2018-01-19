import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import addReducer from '../reducer/indexReducer'

export default createStore(addReducer, composeWithDevTools(applyMiddleware(thunk)));
