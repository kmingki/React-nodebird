//put() redux store에 dispatch하는 역할
import axios from 'axios';
import shortId from 'shortid';
import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';

import {
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
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
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
  } from '../reducers/post';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function unlikePostAPI(data) {
    return axios.patch(`post/${data}/unlike`);
}

function * unlikePost(action) {
    try{
        const result = yield call(unlikePostAPI, action.data);
        //console.log(result.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNLIKE_POST_FAILURE,
            data: err.response.data
        });
    }
}

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}

function * likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: LIKE_POST_FAILURE,
            error: error.response.data
        })
    }
    
}

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
    return axios.delete(`/post/${data}`);
}

function * removePost(action) {
    try{
        const result = yield call(removePostAPI, action.data); //action.data == postid
        yield put({
            type : REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type : REMOVE_POST_OF_ME,
            data: result.data,
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

function uploadImagesAPI(data){
    return axios.post('/post/images', data);
}

function * uploadImages(action) {
    try{
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGES_REQUEST,
            error: err.response.data,
        });
    }
}



function * watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function * watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
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
function * watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

export default function * postSaga() {
    yield all([
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}