import axios from "axios";
import { GET_MOVIES_REQUEST } from "../../constants/actionTypes";
import { URL_GET_MOVIES } from "../../constants/urls";

const getMoviesByPage =  (page) => dispatch => {
  let url = `${URL_GET_MOVIES}${page}`;
  axios
    .get(url)
    .then(res => {
      console.log('requesting')
      dispatch({ type: GET_MOVIES_REQUEST, page:page, payload: res.data.results });
    })
    .catch(err => console.log(err));
};

export default getMoviesByPage;
