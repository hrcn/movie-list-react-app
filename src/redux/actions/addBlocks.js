import { ADD_BLOCKS } from "../../constants/actionTypes";

//Creating an object for our action to update the movie list.
//Setting the payload to the movie of our choice as a string.

export const addBlocks = (movieID) => {
  return {
    type: ADD_BLOCKS,
    payload: movieID,
  };
};
