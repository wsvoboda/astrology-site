import { combineReducers } from "redux";
import horoscope from "./horoscopeReducer";
import moonPhases from "./moonPhaseReducer";

const rootReducer = combineReducers({ horoscope, moonPhases });

export default rootReducer;
