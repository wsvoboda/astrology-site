import { combineReducers } from "redux";
import horoscope from "./horoscopeReducer";
import moonPhases from "./moonPhaseReducer";
import tarot from "./tarotReducer";

const rootReducer = combineReducers({ horoscope, moonPhases, tarot });

export default rootReducer;
