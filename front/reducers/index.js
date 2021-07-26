import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';


//(이전상태, 액션) => 다음상태
const rootReducer=combineReducers({
    //서버사이드렌더링을 위해 index 추가
    index: (state = {} , action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            
                default :
                return state;
                }
    },
    user,//user와 post의 initialstate는 redux가 해결
    post,
});
    

export default rootReducer;