import "./Header.css";
import {createRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {getGenres, getMovies} from "../../services/api.service";
import {genreAdded, genreRemoved, sortingMethodChanged} from "../../redux/actions";
import UserInfo from "../userInfo/UserInfo";

export default function Header() {

    const refObject = createRef();
    const history = useHistory();
    const {movieReducer, searchParamsReducer} = useSelector(state => state);
    const dispatch = useDispatch();

    const {genres} = movieReducer;

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    const onChangeCheckbox = ev => {
        if (ev.target.checked) {
            dispatch(genreAdded(ev.target.value));
        } else {
            dispatch(genreRemoved(ev.target.value));
        }
    };

    const onChangeSelect = ev => {
        dispatch(sortingMethodChanged(ev.target.value));
    };

    const onSubmitForm = ev => {
        ev.preventDefault();
        history.push('/');
        dispatch(getMovies(searchParamsReducer));
    };

    return (
        <div className={'header'}>
            <div className={'header__top'}>
                <h1><Link to={'/'}>The Movies App</Link></h1>
                <UserInfo/>
            </div>
            <div className={'header__menu'}>
                <form ref={refObject} onSubmit={onSubmitForm}>
                    <div className={'header__form-wrapper'}>
                        <div className={'header__genres'}>
                            {genres.map(genre => (
                                <div key={genre.id}>
                                    <label>
                                        <input type={'checkbox'} name={genre.name}
                                               value={genre.id} onChange={onChangeCheckbox}/>
                                        {genre.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className={'header__sorting-options'}>
                            <select name={'sortingBy'} onChange={onChangeSelect}>
                                <option value={'popularity.asc'}>Popularity Ascending</option>
                                <option value={'popularity.desc'} selected>Popularity Descending</option>
                                <option value={'vote_average.asc'}>Rating Ascending</option>
                                <option value={'vote_average.desc'}>Rating Descending</option>
                                <option value={'release_date.asc'}>Release Date Ascending</option>
                                <option value={'release_date.desc'}>Release Date Descending</option>
                                <option value={'original_title.asc'}>Title (A-Z)</option>
                                <option value={'original_title.desc'}>Title (Z-A)</option>
                            </select>
                        </div>
                        <div className={'header__button-wrapper'}>
                            <button type={'submit'} className={'search-btn'}>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
