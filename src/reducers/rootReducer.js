import { combineReducers } from "redux";
import horoscope from "./horoscopeReducer";

const rootReducer = combineReducers({ horoscope });

export default rootReducer;
