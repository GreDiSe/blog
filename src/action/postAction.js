import {
    CREATE_POST,
    EDIT_POST,
    GET_ALL_POSTS,
    GET_CURRENT_POST,
    REMOVE_POST
} from "./actionTypes";

export const createPost = post => ({
    type: CREATE_POST,
    post: post
});

export const editPost = (post, index) => ({
    type: EDIT_POST,
    post: post,
    index: index
});

export const removePost = index => ({
    type: REMOVE_POST,
    index: index
});