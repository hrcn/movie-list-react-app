import {
  FETCH_CAROUSEL_MOVIE_SUCCESS,
  FETCH_CAROUSEL_MOVIE_ERROR
} from "../../constants/actionTypes";

const initialState = {
  movieData: []
};

const fetchCarouselMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAROUSEL_MOVIE_SUCCESS:
      return [];
    case FETCH_CAROUSEL_MOVIE_ERROR:
      return [];
    default:
      return state;
  }
};

export default fetchCarouselMovieReducer;
