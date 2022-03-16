import produce from 'immer';

export const initialState = {
  loadRoomLoading: false,
  loadRoomDone: false,
  loadRoomError: null,
  rooms: [],
};

export const UPDATE_ROOM_LIST = 'UPDATE_ROOM_LIST';
export const LOAD_ROOM_LIST = 'LOAD_ROOM_LIST';
export const LOAD_ROOM_REQUEST = 'LOAD_ROOM_REQUEST';
export const LOAD_ROOM_SUCCESS = 'LOAD_ROOM_SUCCESS';
export const LOAD_ROOM_FAILURE = 'LOAD_ROOM_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case UPDATE_ROOM_LIST: {
      // draft.mainPosts = draft.mainPosts.concat(action.data);
      // draft.me.Followings.push({ id : action.data.UserId});
      draft.rooms.push(action.data);
      break;
    }
    case LOAD_ROOM_LIST: {
      draft.rooms = action.data;
      break;
    }
    case LOAD_ROOM_REQUEST: {
      draft.loadRoomLoading = true;
      draft.loadRoomDone = false;
      draft.loadRoomError = null;
      break;
    }
    case LOAD_ROOM_SUCCESS: {
      // draft.rooms=action.data;
      draft.loadRoomLoading = false;
      draft.loadRoomDone = true;
      draft.loadRoomError = null;
      break;
    }
    case LOAD_ROOM_FAILURE: {
      draft.loadRoomLoading = false;
      draft.loadRoomDone = false;
      draft.loadRoomError = action.error;
      break;
    }
    default:
      break;
  }
});

export default reducer;
