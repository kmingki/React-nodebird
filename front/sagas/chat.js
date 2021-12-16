import axios from 'axios';
import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';

import {
    CREATE_CHAT_REQUEST,
    CREATE_CHAT_SUCCESS,
    CREATE_CHAT_FAILURE,
} from '../reducers/chat';


function createChatAPI(data) {
    return axios.post('/room', data); 
}

function * createChat(action) {
    try{
        const result = yield call(createChatAPI, action.data);
        yield put({
            type: CREATE_CHAT_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CREATE_CHAT_FAILURE,
            error: err.response.data,
        });
    }
}


function * watchCreateChat() {
    yield takeLatest(CREATE_CHAT_REQUEST, createChat);
}

export default function * chatSaga() {
    yield all([
        fork(watchCreateChat),
    ]);
}