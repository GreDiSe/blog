import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addReducer from '../reducer/indexReducer'


const store = createStore(
    addReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState());

export default store