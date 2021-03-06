import { combineReducers } from "redux";
// import all the reducers
import BlocklistReducer from "./blocklistReducer";
import LikelistReducer from "./likelistReducer";
import modalReducer from "./modalReducer";
import getCarouselMovieReducer from "./getCarouselMovieReducer";
import getMoviesReducer from "./getMoviesReducer";

const allReducers = combineReducers({
  BlocklistReducer,
  LikelistReducer,
  modalReducer,
  getCarouselMovieReducer,
  getMoviesReducer,
});

export default allReducers;
