import { ADD_LIKES } from '../../constants/actionTypes'; 

// Recieve type and payload from action and return payload.
// Movies are being updated by the action of the string in our payload.

const defaultState = {
    likelist: []
};

const likelistReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ADD_LIKES:
            return { 
                ...state,
                likelist: [...state.likelist, payload]
             }
        default:
            return state
    };
};

export default likelistReducer;