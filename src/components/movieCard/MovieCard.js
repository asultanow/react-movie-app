import "./MovieCard.css";
import Poster from "../poster/Poster";
import GenreBadge from "../genreBadge/GenreBadge";
import StarRating from "../starRating/StarRating";
import {useSelector} from "react-redux";

export default function MovieCard({movie, history, match: {url}}) {
    const {id, title, poster_path, genre_ids, vote_average} = movie;

    const {paramsReducer} = useSelector(state => state);
    const {theme} = paramsReducer;

    const bgColor = theme === 'light' ? 'movie-card-bg-light' : 'movie-card-bg-dark';
    const textColor = theme === 'light' ? 'movie-card-text-light' : 'movie-card-text-dark';

    const onGetMovieDetails = () => history.push(`${url}/${id}`);

    return (
        <div className={`movie-card ${bgColor} ${textColor}`} onClick={onGetMovieDetails}>
            <div>
                <Poster posterPath={poster_path}/>
                <div className={'movie-card__info'}>
                    <h5>{title}</h5>
                    <div className={'movie-card__genres'}>
                        {genre_ids.map(genreId => <GenreBadge key={genreId} genreId={genreId}/>)}
                    </div>
                </div>
            </div>
            <div className={'movie-card__rating'}>
                <StarRating rating={vote_average}/>
            </div>
        </div>
    );
}
