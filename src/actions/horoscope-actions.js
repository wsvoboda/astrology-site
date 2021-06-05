import { GET_HOROSCOPE } from "../action-types/horoscope-action-type";

export const getHoroscope = (dispatch, horoscope) => {
  return dispatch({ type: GET_HOROSCOPE, payload: horoscope });
};
