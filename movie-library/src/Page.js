import React from 'react';
import { Component } from "react";
import './Page.css';
import Movies from './Movies';
import Shows from './Shows';

class Page extends Component {

    pages = {
        movies: Movies,
        shows: Shows,
    }

    render() {
        const PageComponent = this.pages[this.props.page || 'movies'];

        return (
            <div className="page">
                <PageComponent />
            </div>
        );
    }
}

export default Page;