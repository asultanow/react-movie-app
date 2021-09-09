import "./MovieList.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../services/api.service";
import MovieCard from "../movieCard/MovieCard";
import {pageSelected} from "../../redux/actions";

export default function MovieList(props) {

    const dispatch = useDispatch();
    const {movieReducer, paramsReducer} = useSelector(state => state);
    const {movies} = movieReducer;
    const {searchParams, formState, theme} = paramsReducer;

    const bgColor = theme === 'light' ? 'page-selector-bg-light' : 'page-selector-bg-dark';
    const textColor = theme === 'light' ? 'page-selector-text-light' : 'page-selector-text-dark';
    const selectBgColor = theme === 'light' ? 'page-select-bg-light' : 'page-select-bg-dark';

    const [pages, setPages] = useState([]);

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
        dispatch(getMovies(searchParams));
    }, [searchParams]);

    const handlePageChange = ev => {
        dispatch(pageSelected(ev.target.value));
    };

    return (
        <div>
            <div className={'movie-list'}>
                {
                    movies && movies.results.map(movie => <MovieCard key={movie.id} movie={movie} {...props}/>)
                }
            </div>
            <div className={`page-selector ${bgColor} ${textColor}`}>
                <label>Page
                    <select className={`page-select ${selectBgColor}`} name={'pages'}
                            value={formState.selectedPage} onChange={handlePageChange}>
                        {
                            pages.map(page => <option key={page} value={page}>{page}</option>)
                        }
                    </select>
                </label>
            </div>
        </div>
    );
}
