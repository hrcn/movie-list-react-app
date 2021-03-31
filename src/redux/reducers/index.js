import { combineReducers } from "redux";
// import all the reducers
import BlocklistReducer from "./blocklistReducer";
import LikelistReducer from "./likelistReducer";
import modalReducer from "./modalReducer";

const allReducers = combineReducers({
  BlocklistReducer,
  LikelistReducer,
  modalReducer,
});

export default allReducers;
