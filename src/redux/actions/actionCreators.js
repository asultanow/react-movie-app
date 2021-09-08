import {MOVIES_LOADED, MOVIE_DETAILS_LOADED, GENRES_LOADED,
    SORTING_METHOD_CHANGED, GENRE_ADDED, GENRE_REMOVED} from "./actionTypes";

const moviesLoaded = movies => ({type: MOVIES_LOADED, payload: movies});

const movieDetailsLoaded = movie => ({type: MOVIE_DETAILS_LOADED, payload: movie});

const genresLoaded = genres => ({type: GENRES_LOADED, payload: genres});

const sortingMethodChanged = sortingMethod => ({type: SORTING_METHOD_CHANGED, payload: sortingMethod});

const genreAdded = genre => ({type: GENRE_ADDED, payload: genre});

const genreRemoved = genre => ({type: GENRE_REMOVED, payload: genre});

export {moviesLoaded, movieDetailsLoaded, genresLoaded, sortingMethodChanged, genreAdded, genreRemoved};
