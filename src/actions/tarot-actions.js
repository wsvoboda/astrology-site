import { GET_TAROT_READING } from "../action-types/tarot-action-type";

export const getTarotCards = (dispatch, cards) => {
  return dispatch({ type: GET_TAROT_READING, payload: cards });
};
