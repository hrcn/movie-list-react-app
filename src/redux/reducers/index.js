import { combineReducers } from 'redux'
import MoviesReducer from './movie_reducer';

// import all the reducers

const allReducers = combineReducers({
    MoviesReducer,
})

export default allReducers
