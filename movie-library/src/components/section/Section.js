import React from 'react';
import './Section.css';

function Section(props){
    return (
        <div className="page">
            <div className="vertical-title">
                <h1>{props.header}</h1>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default Section;