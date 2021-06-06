import { GET_MOONPHASES } from "../action-types/moonPhase-action-type";

const initialState = [{}];

const moonPhases = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOONPHASES:
      return (state = action.payload);
    default:
      return state;
  }
};

export default moonPhases;
