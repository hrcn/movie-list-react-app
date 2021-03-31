import { GET_CAROUSEL_MOVIE } from "../../constants/actionTypes";

const initialState = {
  carouselMovieData: []
};

const getCarouselMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL_MOVIE:
      return { ...state, carouselMovieData: action.payload, loading: false };
    default:
      return state;
  }
};

export default getCarouselMovieReducer;
