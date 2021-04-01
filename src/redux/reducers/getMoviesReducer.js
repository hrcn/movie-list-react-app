import { GET_MOVIES_REQUEST } from "../../constants/actionTypes";

const initialState = {
  allMoviesData: [],
  page: 0,
};

const getMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return { ...state, allMoviesData: [...state.allMoviesData, ...action.payload], page: action.page};
    default:
      return state;
  }
};

export default getMoviesReducer;
