import {useSelector} from "react-redux";
import "./GenreBadge.css";

export default function GenreBadge({genreId}) {

    const {movieReducer} = useSelector(state => state);
    const {genres} = movieReducer;

    const genre = genres.find(genre => genre.id === genreId);

    return (
        <div className={'genre-badge'}>{genre && genre.name}</div>
    );
}
