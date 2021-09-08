import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer";
import {searchParamsReducer} from "./searchParamsReducer";

export const rootReducer = combineReducers({movieReducer, searchParamsReducer});
