import { OPEN_MODAL, CLOSE_MODAL } from "../../constants/actionTypes";

const initialState = {
  modalOpen: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalOpen: true };
    case CLOSE_MODAL:
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};

export default modalReducer;
