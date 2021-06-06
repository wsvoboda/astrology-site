import { GET_MOONPHASES } from "../action-types/moonPhase-action-type";

export const getMoonPhases = (dispatch, phases) => {
  return dispatch({ type: GET_MOONPHASES, payload: phases });
};
