import "./MovieInfo.css";
import {useEffect} from "react";
import {getMovieById} from "../../services/api.service";
import {useDispatch, useSelector} from "react-redux";
import {backdropBaseURL} from "../../services/api.service";
import Poster from "../poster/Poster";
import StarRating from "../starRating/StarRating";

export default function MovieInfo({match: {params: {id}}}) {

    const dispatch = useDispatch();
    const {movieReducer} = useSelector(state => state);
    const {movie} = movieReducer;

    useEffect(() => {
        dispatch(getMovieById(id));
    }, []);

    return (
        movie && (
            <div className={'movie-details'}>
                <div className={'movie-details__poster'}>
                    <Poster posterPath={movie.poster_path}/>
                </div>
                <div className={'movie-details__backdrop'} style={{backgroundImage: `url(${backdropBaseURL}${movie.backdrop_path})`}}>
                    <div className={'movie-details__info'}>
                        <h2>{movie.original_title} ({movie.release_date})</h2>
                        <div className={'movie-details__genres'}>
                            {
                                movie.genres.map(genre => <h4 key={genre.id}>{genre.name}</h4>)
                            }
                        </div>
                        <div>
                            <StarRating rating={movie.vote_average}/>
                        </div>
                        <p>{movie.tagline}</p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        )
    );
}
