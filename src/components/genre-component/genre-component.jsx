import React,{ Component } from 'react'; 
import {Link} from 'react-router-dom';
import  Des  from '../genre-description/genre-description';
import './genres-component.css';

class Genre extends Component {
    constructor() {
        super();
        
        this.state = {
            active: true,
        };
        this.toggleClass= this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return(

    <div>
        <h2>musicwiki</h2>
        <h4>Welcome!</h4>
        <h5>Choose a genre to start with <span onClick={this.toggleClass} className="expand-icon"><i className={this.state.active ? "fa fa-angle-down": "fa fa-angle-up"} aria-hidden="true"></i></span></h5>
        <div className={this.state.active ? 'unexpanded': null} >
        {this.props.children.map(genre=>
            <div className="genre-tags"><Link className="genre-link" to={`/genre/${genre.name}`}>{genre.name}</Link></div>
        )}
        </div>
    </div>
);
        }
    }
export default Genre;
