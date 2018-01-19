import {
    CREATE_POST,
    EDIT_POST,
    GET_ALL_POSTS,
    GET_CURRENT_POST,
    REMOVE_POST
} from "./actionTypes";

export const createPost = (post, id) => ({
    type: CREATE_POST,
    post: post,
    id: id
});

export const editPost = id => ({
    type: EDIT_POST,
    id: id
});

export const getAllPosts = () => ({
    type: GET_ALL_POSTS
});

export const getCurrentPost = id => ({
    type: GET_CURRENT_POST,
    id: id
});

export const removePost = id => ({
    type: REMOVE_POST,
    id: id
});