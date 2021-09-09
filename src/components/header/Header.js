import "./Header.css";
import {createRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {UncontrolledCollapse, CardBody, Card} from 'reactstrap';
import {getGenres} from "../../services/api.service";
import {formSubmitted, genreAdded, genreRemoved, sortingMethodChanged, themeChanged} from "../../redux/actions";
import UserInfo from "../userInfo/UserInfo";

export default function Header() {

    const refObject = createRef();
    const history = useHistory();
    const dispatch = useDispatch();

    const {movieReducer, paramsReducer} = useSelector(state => state);
    const {genres} = movieReducer;
    const {formState, theme} = paramsReducer;

    const bgColor = theme === 'light' ? 'header-bg-light' : 'header-bg-dark';
    const textColor = theme === 'light' ? 'header-text-light' : 'header-text-dark';
    const buttonBgColor = theme === 'light' ? 'btn-bg-light' : 'btn-bg-dark';
    const selectBgColor = theme === 'light' ? 'select-bg-light' : 'select-bg-dark';
    const themeIcon = theme === 'light' ? faMoon : faSun;

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

    const handleSortingChange = ev => {
        dispatch(sortingMethodChanged(ev.target.value));
    };

    const onSubmitForm = ev => {

        ev.preventDefault();
        history.push('/movies');
        dispatch(formSubmitted());
    };

    const onChangeTheme = () => {

        if (theme === 'light') {
            dispatch(themeChanged('dark'));
        } else {
            dispatch(themeChanged('light'));
        }
    };

    return (
        <div className={`header ${bgColor} ${textColor}`}>
            <div className={'header__top'}>
                <h1><Link className={`header__link ${textColor}`} to={'/movies'}>The Movies App</Link></h1>
                <button className={`menu-btn ${buttonBgColor}`} id={'toggler'}><span></span></button>
                <UserInfo/>
                <div>
                    <button className={`theme-btn ${buttonBgColor}`} onClick={onChangeTheme}>
                        <FontAwesomeIcon icon={themeIcon} size={'2x'}/>
                    </button>
                </div>
            </div>
            <div>
                <UncontrolledCollapse className={`header__menu`} toggler="#toggler">
                    <Card>
                        <CardBody>
                            <div className={''}>
                                <form ref={refObject} onSubmit={onSubmitForm}>
                                    <div className={'header__form-wrapper'}>
                                        <div className={'header__genres'}>
                                            {
                                                genres.map(genre => (
                                                    <div className={'header__genre'} key={genre.id}>
                                                        <label>
                                                            <input type={'checkbox'} name={genre.name}
                                                                   value={genre.id} onChange={onChangeCheckbox}/>
                                                            {genre.name}
                                                        </label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className={'header__right'}>
                                            <select className={`sort-by-select ${selectBgColor}`} name={'sort-by'}
                                                    value={formState.sortBy} onChange={handleSortingChange}>
                                                <option value={'popularity.asc'}>Popularity Ascending</option>
                                                <option value={'popularity.desc'}>Popularity Descending</option>
                                                <option value={'vote_average.asc'}>Rating Ascending</option>
                                                <option value={'vote_average.desc'}>Rating Descending</option>
                                                <option value={'release_date.asc'}>Release Date Ascending</option>
                                                <option value={'release_date.desc'}>Release Date Descending</option>
                                                <option value={'original_title.asc'}>Title (A-Z)</option>
                                                <option value={'original_title.desc'}>Title (Z-A)</option>
                                            </select>
                                            <button type={'submit'} className={`search-btn ${buttonBgColor}`}>Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        </div>
    );
}
