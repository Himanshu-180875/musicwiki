import React from 'react';
import {Link} from 'react-router-dom';
import  Des  from '../genre-description/genre-description';
import './genres-component.css';
const Genre = (props) => (
    <div>
        <h2>musicwiki</h2>
        <h4>Welcome!</h4>
        <h5>Choose a genre to start with</h5>
        {props.children.map(genre=>
            <div className="genre-tags"><Link className="genre-link" to={`/genre/${genre.name}`}>{genre.name}</Link></div>
        )}
    </div>
);

export default Genre;
