import { all, delay, fork, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
    LOAD_MY_INFO_FAILURE,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
  } from '../reducers/user';

function loadMyInfoAPI() {
    return axios.get('/user');
}

function * loadMyInfo (action) {
    try {
        const result = yield call(loadMyInfoAPI);
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data
        });

    } catch (err) {
        console.error(err);
        yield put({
            type:LOAD_MY_INFO_FAILURE,
            data: err.response.data,
        });
    }
}


function logInAPI(data){
    return axios.post('/user/login', data);
}

/// delay() => Promise 가 한번 resolve 되고 나면, 미들웨어는 Saga 를 다시 작동시키면서, 다음 yield 까지 코드를 실행합니다.
function * logIn (action) {
    try{
        const result = yield call(logInAPI, action.data);//{ email, password }
        //console.log(result.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err){
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data, 
        });
    }
}

/*err.response.data :  https://xn--xy1bk56a.run/axios/guide/error-handling.html */


function logOutAPI() {
    return axios.post('/user/logout');
}

function * logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error : err.response.data,
        });
    }
}

function signUpAPI(data) {
    return axios.post('/user', data);
}

//put():특정 액션을 dispatch한다.
function* signUp(action) {
    try {
      const result = yield call(signUpAPI, action.data);
      console.log(result);
      yield put({
        type: SIGN_UP_SUCCESS,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: SIGN_UP_FAILURE,
        error: err.response.data,//err.response가 undefined라는데 
      });
    }
  }
  
function followAPI() {
    return axios.post('/api/follow');
}

function * follow(action) {
    try{
        //const result = yield call(followAPI);
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type:FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.post('/api/unfollow');
}

function * unfollow(action) {
    try{
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data : action.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function * watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function * watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function * watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function * watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function * watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function * watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function * userSaga(){
    yield all([
        fork(watchLoadMyInfo),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}