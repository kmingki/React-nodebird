import produce from "immer";

export const initialState = {
    createChatLoading: false,
    createChatDone: false,
    createChatError: null,
};


export const CREATE_CHAT_REQUEST = 'CREATE_CHAT_REQUEST';
export const CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS';
export const CREATE_CHAT_FAILURE = 'CREATE_CHAT_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case CREATE_CHAT_REQUEST: {
            draft.createChatLoading=true;
            draft.createChatDone=false;
            draft.createChatError=null;
            break;
        }
        case CREATE_CHAT_SUCCESS: {
            draft.createChatLoading=false;
            draft.createChatDone=true;
            draft.createChatError=null;
            break;
        }
        case CREATE_CHAT_FAILURE: {
            draft.createChatLoading=false;
            draft.createChatDone=false;
            draft.createChatError=action.error;
            break;
        }
    }
});


export default reducer;