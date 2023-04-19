import { GET_HOROSCOPE } from "../action-types/horoscope-action-type";

const initialState = {
  zodiac: null,
  sign: null,
};

const horoscope = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOROSCOPE:
      return {...state, zodiac: action.payload, sign: action.sign};
    default:
      return state;
  }
};

export default horoscope;
