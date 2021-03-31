import axios from "axios";

import {
  FETCH_CAROUSEL_MOVIE_REQUEST,
  FETCH_CAROUSEL_MOVIE_SUCCESS,
  FETCH_CAROUSEL_MOVIE_FAIL
} from "../../constants/actionTypes";

const fetchCarouselMovie = () => dispatch => {
  dispatch({ type: FETCH_CAROUSEL_MOVIE_REQUEST });

  const carouselMovieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

  axios
    .get(carouselMovieUrl)
    .then(res =>
      dispatch({
        type: FETCH_CAROUSEL_MOVIE_SUCCESS,
        payload: res.data.results
      })
    )
    .catch(err => dispatch({ type: FETCH_CAROUSEL_MOVIE_FAIL, payload: err }));
};

export default fetchCarouselMovie;
