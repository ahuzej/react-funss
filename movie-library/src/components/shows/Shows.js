import React from 'react';
import { Component } from 'react';
import Section from '../section/Section';
import Enums from '../../common/enums';
import Access from '../../common/dataAccess';
import BoxItem from '../box_item/BoxItem';

class Shows extends Component {
    constructor(){
        super();

        this.access = new Access();
    }

    componentDidMount(){
        this.access.get({
            api: Enums.api.tvMaze.value,
            params: '/shows'
        }).then(data => {
            console.log(data);
            this.setState({
                shows: data
            });
        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <Section header="SHOWS">
                {
                    this.state && this.state.shows && this.state.shows.map(show => (
                        <BoxItem key={show.id} item={{
                            name: show.name,
                            image: show.image.medium,
                            summary: show.summary,
                            genres: show.genres
                        }}/>
                    ))
                }
            </Section>
        );
    }
}

export default Shows;