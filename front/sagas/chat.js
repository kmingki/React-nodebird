import axios from 'axios';
import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';

import {
    LOAD_ROOM_REQUEST,
    LOAD_ROOM_SUCCESS,
    LOAD_ROOM_FAILURE,
} from '../reducers/chat';

function loadRoomAPI(data) {
    return axios.get(`/room/${data}`);
}

function * loadRoom(action) {
    try{
        const result = yield call(loadRoomAPI, action.data);
        yield put({
            type: LOAD_ROOM_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_ROOM_FAILURE,
            error: err.response.data
        });
    }
}

function * watchLoadRoom() {
    yield takeLatest(LOAD_ROOM_REQUEST, loadRoom);
}

export default function * chatSaga() {
    yield all([
        fork(watchLoadRoom)
    ]);
}