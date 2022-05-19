import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import post from './post';
import chat from './chat';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['user'],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: // HYDRATE액션을 처리하는 리듀서가 필요하다.
      // console.log('HYDRATE', action);
      // HYDRATE는 서버에서 생성한 상태를 클라이언트 스토어에 합쳐준다.
      console.log('HYDRATE');
      console.log(action.payload);
      return action.payload; // action.payload에는 서버에서 생성한 스토어의 상태가 담겨있다.
    default: {
      console.log('client store');
      const combinedReducer = combineReducers({
        user,
        post,
        chat,
      });
      return combinedReducer(state, action);
    }
  }
};

export default persistReducer(persistConfig, rootReducer);
