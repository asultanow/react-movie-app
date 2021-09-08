import "./MovieCard.css";
import Poster from "../poster/Poster";
import GenreBadge from "../genreBadge/GenreBadge";
import StarRating from "../starRating/StarRating";

export default function MovieCard({movie, history, match: {url}}) {
    const {id, title, poster_path, genre_ids, vote_average} = movie;

    const onGetMovieDetails = () => history.push(id + '');

    return (
        <div className={'movie-card'} onClick={onGetMovieDetails}>
            <div>
                <Poster posterPath={poster_path}/>
                <div className={'movie-card__info'}>
                    <h3>{title}</h3>
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
