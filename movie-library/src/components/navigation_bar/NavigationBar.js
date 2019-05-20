import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './NavigationBar.css';
import Movies from '../movies/Movies';
import Shows from '../shows/Shows';
import Home from '../home/Home';

class NavigationBar extends Component {
    render() {
        return (
            <Router>
                <div className="nav-top">
                    <div className="logo">
                        <h1>Movie Library</h1>
                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/movies/">Movies</Link>
                            </li>
                            <li>
                                <Link to="/shows/">Shows</Link>
                            </li>
                        </ul>
                    </div>
                </div>   

                <Route exact path="/" component={Home}/>
                <Route path="/movies/" component={Movies}/>
                <Route path="/shows/" component={Shows}/> 
            </Router>
        );
    }
}

export default NavigationBar;