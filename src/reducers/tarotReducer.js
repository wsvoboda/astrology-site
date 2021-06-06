import { GET_TAROT_READING } from "../action-types/tarot-action-type";

const initialState = [{}];

const tarot = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAROT_READING:
      return (state = action.payload);
    default:
      return state;
  }
};

export default tarot;
