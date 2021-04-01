import axios from "axios";

import { GET_CAROUSEL_MOVIE } from "../../constants/actionTypes";

const getCarouselMovie = () => dispatch => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  axios
    .get(url)
    .then(res => {
      dispatch({ type: GET_CAROUSEL_MOVIE, payload: res.data.results });
    })
    .catch(err => console.log(err));
};

export default getCarouselMovie;
