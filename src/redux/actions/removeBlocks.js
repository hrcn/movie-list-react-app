import { REMOVE_BLOCKS } from "../../constants/actionTypes";

//Creating an object for our action to update the movie list.
//Setting the payload to the movie of our choice as a string.

export const removeBlocks = (movieID) => {
  return {
    type: REMOVE_BLOCKS,
    payload: movieID,
  };
};
