import React from 'react';
import { Component } from 'react';
import './BoxItem.css';
import $ from 'jquery';

class BoxItem extends Component {
    componentDidMount(){
        const toggleSummary = (evnt, show) => {
            let item = $(evnt.currentTarget);
            
            // item.css('transform', show ? 'scale(1.15)' : 'scale(0.88)');
            // item.css('z-index', show ? '9999' : 'auto');
            // item.css('height', show ? '700px' : '100%');
            item.find('.summary').css('display', show ? 'block' : 'none');
        };

        $('.item').hover(e => toggleSummary(e, true), e => toggleSummary(e, false));
    }

    render(){
        let item = this.props.item;
        item.summary = item.summary.replace(/<p>|<\/p>|<b>|<\/b>/g, '');

        return (
            <div className="item">
                <div className="inner">
                    <img src={item.image} alt="" />
                        <div className="genres">
                            {
                                item.genres.map((genre, i) => (
                                    <span key={i} className="genre" title={genre}>{genre}</span>
                                ))
                            }
                        </div>
                    <div className="description">
                        <h3 className="header">{item.name}</h3>
                        <p className="summary">{item.summary}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxItem;