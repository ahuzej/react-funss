import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './NavigationBar.css';
import Movies from './Movies';
import Shows from './Shows';

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
                <Route path="/movies/" component={Movies}/>
                <Route path="/shows/" component={Shows}/> 
            </Router>
            // <div className="nav-top">
            //     <div className="logo">
            //         <h1>Movie Library</h1>
            //     </div>
            //     <div className="links">
            //         <ul>
            //             <li><span>Home</span></li>
            //             <li><span onClick={this.props.changePage.bind(this, 'movies')}>Movies</span></li>
            //             <li><span onClick={this.props.changePage.bind(this, 'shows')}>Shows</span></li>
            //         </ul>
            //     </div>
            // </div>
        );
    }
}

export default NavigationBar;