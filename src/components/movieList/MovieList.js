import "./MovieList.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../services/api.service";
import MovieCard from "../movieCard/MovieCard";

export default function MovieList(props) {

    const {movieReducer, searchParamsReducer} = useSelector(state => state);
    const dispatch = useDispatch();

    const [pages, setPages] = useState([]);

    const {movies} = movieReducer;
    const {page} = searchParamsReducer;

    const totalPages = movies && movies.total_pages;

    useEffect(() => {

        if (totalPages) {
            const pageNumbers = [];

            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }

            setPages([...pageNumbers]);
        }
    }, [totalPages]);

    useEffect(() => {
        dispatch(getMovies(searchParamsReducer));
    }, [page]);

    const onChangePage = ev => {
        dispatch(getMovies(searchParamsReducer, ev.target.value));
    };

    return (
        <div>
            <div className={'movie-list'}>
                {
                    movies && movies.results.map(movie => <MovieCard key={movie.id} movie={movie} {...props}/>)
                }
            </div>
            <div className={'page-selector'}>
                <label>Page
                    <select name={'pages'} onChange={onChangePage}>
                        {
                            pages.map(page => <option key={page} value={page}>{page}</option>)
                        }
                    </select>
                </label>
            </div>
        </div>
    );
}
