import { combineReducers } from "redux";
// import all the reducers
import BlocklistReducer from "./blocklistReducer";
import LikelistReducer from "./likelistReducer";
import modalReducer from "./modalReducer";
import getCarouselMovieReducer from "./getCarouselMovieReducer";

const allReducers = combineReducers({
  BlocklistReducer,
  LikelistReducer,
  modalReducer,
  getCarouselMovieReducer,
});

export default allReducers;
