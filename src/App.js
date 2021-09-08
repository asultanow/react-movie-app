import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import MovieList from "./components/movieList/MovieList";
import MovieInfo from "./components/movieInfo/MovieInfo";

export default function App() {

    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path={'/:id'} component={MovieInfo}/>
                    <Route path={'/'} component={MovieList}/>
                </Switch>
            </div>
        </Router>
    );
}
