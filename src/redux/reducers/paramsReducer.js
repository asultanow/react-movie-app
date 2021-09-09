import {
    SORTING_METHOD_CHANGED,
    GENRE_ADDED,
    GENRE_REMOVED,
    PAGE_SELECTED,
    FORM_SUBMITTED,
    THEME_CHANGED
} from "../actions";

const initialState = {
    searchParams: {
        page: 1,
        sort_by: 'popularity.desc',
        with_genres: ''
    },
    formState: {
        selectedPage: 1,
        sortBy: 'popularity.desc',
        withGenres: ''
    },
    theme: 'light'
};

export const paramsReducer = (state = initialState, action) => {

    const {type, payload} = action;
    const {searchParams, formState} = state;

    switch (type) {

        case SORTING_METHOD_CHANGED:
            return {
                ...state,
                formState: {
                    ...formState,
                    sortBy: payload
                }
            };

        case GENRE_ADDED:
            return {
                ...state,
                formState: {
                    ...formState,
                    withGenres: [...formState.withGenres, payload]
                }
            };

        case GENRE_REMOVED:
            return {
                ...state,
                formState: {
                    ...formState,
                    withGenres: [...formState.withGenres.filter(genreId => genreId !== payload)]
                }
            };

        case PAGE_SELECTED:
            return {
                ...state,
                searchParams: {
                    ...searchParams,
                    page: payload
                },
                formState: {
                    selectedPage: payload,
                    sortBy: searchParams.sort_by,
                    withGenres: searchParams.with_genres
                }
            };

        case FORM_SUBMITTED:
            return {
                ...state,
                searchParams: {
                    page: 1,
                    sort_by: formState.sortBy,
                    with_genres: formState.withGenres
                },
                formState: {
                    ...formState,
                    selectedPage: 1
                }
            };

        case THEME_CHANGED:
            return {
                ...state,
                theme: payload
            };

        default:
            return state;
    }
};
