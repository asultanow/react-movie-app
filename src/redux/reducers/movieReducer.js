import {MOVIES_LOADED, MOVIE_DETAILS_LOADED, GENRES_LOADED} from "../actions";

const initialState = {movies: null, movie: null, genres: []};

export const movieReducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {

        case MOVIES_LOADED:
            return {...state, movies: {...payload}};

        case GENRES_LOADED:
            return {...state, genres: [...payload]};

        case MOVIE_DETAILS_LOADED:
            return {...state, movie: payload};

        default:
            return state;
    }
};
