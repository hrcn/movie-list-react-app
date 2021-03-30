import { REMOVE_LIKES } from "../../constants/actionTypes";

//Creating an object for our action to update the movie list.
//Setting the payload to the movie of our choice as a string.

export const removeLikes = (movieID) => {
  return {
    type: REMOVE_LIKES,
    payload: movieID,
  };
};
