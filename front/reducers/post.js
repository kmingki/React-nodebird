//import shortId from 'shortid';
//import faker from 'faker';
import produce from "immer";

export const initialState = {
  mainPosts: [],
  imagePaths:[],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

/*map(): 배열내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
number개의 원소의 array를 fill()로 초기화한 다음 각각의 요소에 map 함수 실행
return : 배열 리턴
export const generateDummyPost = (number) => Array(number).fill().map(()=>({
  id : shortId.generate(),
  User: {
    id: shortId.generate(),
    nickname: faker.name.findName(),
  },
  content: faker.lorem.paragraph(),
  Images: [{
    src: faker.image.image(),
  }],
  Comments: [{
    User: {
      id: shortId.generate(),
      nickname: faker.name.findName(),
    },
    content: faker.lorem.sentence(),
  }]
}));
*/

//action
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POSTS_REQUEST = 'ADD_POSTS_REQUEST';
export const ADD_POSTS_SUCCESS = 'ADD_POSTS_SUCCESS';
export const ADD_POSTS_FAILURE = 'ADD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


//action creator : 파라미터를 받아와서 액션객체 형태로 만들어준다.
export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

//()=>()인 경우는 괄호 안이 return
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

//Reducers : action을 통해 어떤 행동을 정의했다면, 그 결과 상태가 어떻게 바뀌는지 특정하게 되는 함수
//produce state, 상태의 결과 함수
//return produce()인 것
//draft가 state로 바뀌는것
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);//action.data에 load한 배열 들어있음, action.data+draft.mainPosts
      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;
    case LOAD_POSTS_FAILURE: 
      draft.loadPostsLoading = false;
      draft.loadPostsDone = false;
      draft.loadPostsError = action.error;
      break;
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone=false;
      draft.addPostError=null;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone=true;
      draft.mainPosts.unshift(action.data);//새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이반환
      break;
    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;
    case REMOVE_POST_REQUEST:
      draft.removePostLoading=true;
      draft.removePostDone=false;
      draft.removePostError=null;
      break;
    case REMOVE_POST_SUCCESS:
      draft.removePostLoading=false;
      draft.removePostDone=true;
      draft.mainPosts = draft.mainPosts.filter((v)=>{ v.id !== action.data})
      break;
    case REMOVE_POST_FAILURE:
      draft.removePostLoading=false;
      draft.removePostError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone=false;
      draft.addCommentError= null;
      break;
    case ADD_COMMENT_SUCCESS:
      const post = draft.mainPosts.find((v)=>v.id === action.data.PostId);
      post.Comments.unshift(action.data.content);
      draft.addCommentLoading=false;
      draft.addCommentDone=true;
      break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading=false;
        draft.addCommentError = action.error;
        break;
      default:
        break; //return draft해도 되지않나...
  }
});



export default reducer;
/*
https://react.vlpt.us/redux/01-keywords.html
*/
