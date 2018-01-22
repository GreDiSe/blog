import {
    CREATE_POST,
    REMOVE_POST,
    GET_ALL_POSTS,
    EDIT_POST
} from "../action/actionTypes";

import injectReducer from './helper/injectReducer';

export default injectReducer([], {
    [`${CREATE_POST}`]: (state, action) => [...state, action.post],

    [`${REMOVE_POST}`]: (state, action) => state.filter(cur => cur.id !== action.id),

    [`${EDIT_POST}`]: (state, action) => {
        const newState = state.filter(cur => cur.id !== action.id);
        newState.push(action.post);
        newState.sort((a,b) => a.id > b.id);
        return newState;
    }
})