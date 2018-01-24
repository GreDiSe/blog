import {
    CREATE_POST,
    REMOVE_POST,
    EDIT_POST
} from "../action/actionTypes";
import initialState from '../store/initialState'
import injectReducer from './helper/injectReducer';

export default injectReducer(initialState.posts, {
    [`${CREATE_POST}`]: (state, action) => [...state, action.post],

    [`${REMOVE_POST}`]: (state, action) => state.filter((cur, index) => index !== action.index),

    [`${EDIT_POST}`]: (state, action) => {
        const newState = state.concat();
        newState.splice(action.index, 1, action.post);
        return newState;
    }
})