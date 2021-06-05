import { GET_HOROSCOPE } from "../action-types/horoscope-action-type";

const initialState = [{}];

const horoscope = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOROSCOPE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default horoscope;
