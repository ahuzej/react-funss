import React from 'react';
import { Component } from 'react';
import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <div className="nav-top">
                <div className="logo">
                    <h1>Movie Library</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><span>Home</span></li>
                        <li><span onClick={this.props.changePage.bind(this, 'movies')}>Movies</span></li>
                        <li><span onClick={this.props.changePage.bind(this, 'shows')}>Shows</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavigationBar;