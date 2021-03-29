import { ADD_BLOCKS, REMOVE_BLOCKS } from '../../constants/actionTypes';

// Recieve type and payload from action and return payload.
// Movies are being updated by the action of the string in our payload.

const defaultState = {
    blocklist: []
};

const blocklistReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ADD_BLOCKS:
            if (!state.blocklist.includes(payload))
                return {
                    ...state,
                    blocklist: [...state.blocklist, payload]
                }
        case REMOVE_BLOCKS:
            if (state.blocklist.includes(payload)){
                let idx = state.blocklist.indexOf(payload);
                return {
                    ...state,
                    blocklist: state.blocklist.splice(idx,idx)
                }
            }
                
        default:
            return state
    };
};

export default blocklistReducer;