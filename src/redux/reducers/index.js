import { combineReducers } from 'redux'
import BlocklistReducer from './blocklistReducer';
import LikelistReducer from './likelistReducer';

// import all the reducers

const allReducers = combineReducers({
    BlocklistReducer, LikelistReducer,
})

export default allReducers
