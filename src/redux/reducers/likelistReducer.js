import { ADD_LIKES, REMOVE_LIKES } from '../../constants/actionTypes';

// Recieve type and payload from action and return payload.
// Movies are being updated by the action of the string in our payload.

const defaultState = {
    likelist: []
};

const likelistReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ADD_LIKES:
            if (!state.likelist.includes(payload))
                return {
                    ...state,
                    likelist: [...state.likelist, payload]
                }
        case REMOVE_LIKES:
            if (state.likelist.includes(payload)){
                let idx = state.likelist.indexOf(payload);
                return {
                    ...state,
                    likelist: state.likelist.splice(idx,idx)
                }
            }
                
        default:
            return state
    };
};

export default likelistReducer;