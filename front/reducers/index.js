import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import chat from './chat';

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

export default rootReducer;
