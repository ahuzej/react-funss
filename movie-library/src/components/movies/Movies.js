import React from 'react';
import { Component } from 'react';
import Section from '../section/Section';
import Enums from '../../common/enums';
import Access from '../../common/dataAccess';

class Movies extends Component{
    constructor(){
        super();

        this.access = new Access();
    }

    componentDidMount(){
        this.access.get({
            api: Enums.api.tvMaze.value,
            params: '/movie'
        }).then(data => {
            console.log(data);
            this.setState({
                movies: data
            });
        }).catch(error => {
            console.error(error);
        });
    }

    render(){
        return (
            <Section header="MOVIES">
                {
                    this.state && this.state.movies && this.state.movies.map(movie => (
                        <div className="item" key={movie.id}>
                            <p>{movie.name}</p>
                        </div>
                    ))
                }
            </Section>
        );
    }
}

export default Movies;