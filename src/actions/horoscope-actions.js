import { GET_HOROSCOPE } from "../action-types/horoscope-action-type";

export const getHoroscope = (dispatch, horoscope, sign) => {
  return dispatch({ type: GET_HOROSCOPE, payload: horoscope, sign });
};
