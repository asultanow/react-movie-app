import {SORTING_METHOD_CHANGED, GENRE_ADDED, GENRE_REMOVED} from "../actions";

const initialState = {with_genres: '', sort_by: 'popularity.desc'};

export const searchParamsReducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {

        case SORTING_METHOD_CHANGED:
            return {...state, sort_by: payload};

        case GENRE_ADDED:
            return {...state, with_genres: [...state.with_genres, payload]};

        case GENRE_REMOVED:
            return {...state, with_genres: [...state.with_genres.filter(genre => genre !== payload)]};

        default:
            return state;
    }
};
