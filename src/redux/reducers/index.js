import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer";
import {paramsReducer} from "./paramsReducer";

export const rootReducer = combineReducers({movieReducer, paramsReducer});
