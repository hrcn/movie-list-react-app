import { combineReducers } from 'redux'
import MoviesReducer from './movie_reducer';
import LikelistReducer from './likelistReducer';

// import all the reducers

const allReducers = combineReducers({
    MoviesReducer, LikelistReducer,
})

export default allReducers
