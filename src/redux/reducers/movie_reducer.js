import * as actions from 'constants/actionTypes';

export const initialState = {
  movieList: {}
};

export default function MoviesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_MOVIES_REQUEST:
      return {
        movieList: {}
      };
    case actions.GET_MOVIES_SUCCESS:
      return {
        movieDetails: payload
      };
    default:
      return state;
  }
}
