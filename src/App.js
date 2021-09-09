import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch, Redirect} from "react-router";
import {useSelector} from "react-redux";
import Header from "./components/header/Header";
import MovieList from "./components/movieList/MovieList";
import MovieInfo from "./components/movieInfo/MovieInfo";

export default function App() {

    const {paramsReducer: {theme}} = useSelector(state => state);
    const bgColor = theme === 'light' ? 'app-bg-light' : 'app-bg-dark';

    return (
        <div className={`app ${bgColor}`}>
            <Router>
                <Redirect from={'/'} to={'/movies'}/>
                <div className={'main-wrapper'}>
                    <Header/>
                    <Switch>
                        <Route path={'/movies/:id'} component={MovieInfo}/>
                        <Route path={'/movies'} component={MovieList}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
