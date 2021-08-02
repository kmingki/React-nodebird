//put() redux store에 dispatch하는 역할
import axios from 'axios';
import shortId from 'shortid';
import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';

import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
  } from '../reducers/post';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadPostsAPI() {
    return axios.get('/posts');
}

function * loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}

function addPostAPI(data) { // data == text 
    
    return axios.post('/post', { content : data });
}

function * addPost(action){ //action
    try {
        const result = yield call(addPostAPI, action.data); //action.data == text
        
        yield put({ 
            type : ADD_POST_SUCCESS,
            data: result.data,
        });
        
        yield put({ //post reducer와 user reducer
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
        
    } catch (err) {
        console.error(err);
        yield put({
            type:ADD_POST_FAILURE,
            error:err.response.data,
        });
    }
}

function removePostAPI(data) {
    return axios.delete('/api/post', data);
}

function * removePost(action) {
    try{
        //const result = yield call(removeAPI, action.data);
        yield delay(1000);
        yield put({
            type : REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({
            type : REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        });
    }
}


function addCommentAPI(data){
    return axios.post(`/post/${data.postId}/comment`, data);
}

function * addComment(action) {
    try{
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error : err.response.data,
        });
    }
}

function * watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function * watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function * watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function * watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function * postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}