import {
    MOVIES_LOADED,
    MOVIE_DETAILS_LOADED,
    GENRES_LOADED,
    SORTING_METHOD_CHANGED,
    GENRE_ADDED,
    GENRE_REMOVED,
    PAGE_SELECTED,
    FORM_SUBMITTED,
    THEME_CHANGED
} from "./actionTypes";

const moviesLoaded = movies => ({type: MOVIES_LOADED, payload: movies});

const movieDetailsLoaded = movie => ({type: MOVIE_DETAILS_LOADED, payload: movie});

const genresLoaded = genres => ({type: GENRES_LOADED, payload: genres});

const sortingMethodChanged = sortingMethod => ({type: SORTING_METHOD_CHANGED, payload: sortingMethod});

const genreAdded = genre => ({type: GENRE_ADDED, payload: genre});

const genreRemoved = genre => ({type: GENRE_REMOVED, payload: genre});

const pageSelected = page => ({type: PAGE_SELECTED, payload: page});

const formSubmitted = () => ({type: FORM_SUBMITTED});

const themeChanged = theme => ({type: THEME_CHANGED, payload: theme});

export {
    moviesLoaded,
    movieDetailsLoaded,
    genresLoaded,
    sortingMethodChanged,
    genreAdded,
    genreRemoved,
    pageSelected,
    formSubmitted,
    themeChanged
};
