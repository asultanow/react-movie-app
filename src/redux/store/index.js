import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {rootReducer} from "../reducers";

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
