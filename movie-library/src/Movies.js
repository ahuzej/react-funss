import React from 'react';
import { Component } from 'react';
import './Page.css';

class Movies extends Component{
    render(){
        return (
            <div className="page">
                <div className="vertical-title">
                    <h1>MOVIES</h1>
                </div>

                <div className="content">
                    <div className="item">
                        <p>Game of Thrones</p>                  
                    </div>
                    <div className="item">
                        <p>Mr Robot.</p>
                    </div>
                    <div className="item">
                        <p>Big Bang Theory</p>                  
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;