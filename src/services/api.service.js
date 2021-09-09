import axios from "axios";
import {moviesLoaded, genresLoaded, movieDetailsLoaded} from "../redux/actions";

const posterBaseURL = 'https://image.tmdb.org/t/p/w342';
const backdropBaseURL = 'https://image.tmdb.org/t/p/w1280';

const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'e916ff265aed303545a59b88e89f7759'
    }
});

const getMovies = searchParams => {

    const params = {
        ...searchParams,
        with_genres: searchParams.with_genres && searchParams.with_genres.join()
    };

    return dispatch => {
        client.get('/discover/movie', {params})
            .then(response => dispatch(moviesLoaded(response.data)));
    };
};

const getMovieById = id => dispatch => {
    client.get(`/movie/${id}`)
        .then(response => dispatch(movieDetailsLoaded(response.data)));
};

const getGenres = () => dispatch => {
    client.get('/genre/movie/list')
        .then(response => dispatch(genresLoaded(response.data.genres)));
};

export {getMovies, getMovieById, getGenres, posterBaseURL, backdropBaseURL};
