import React, { Component } from 'react'; 
import './../../App.css';
class Track extends Component {
    constructor() {
      super();
      this.state = {
       tracks: []
      
      };
        
    }

   

componentDidMount(props) {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${this.props.children}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({tracks:users.tracks.track}));
  }

  render(){

    return (
        
     


       <div>
      
      {this.state.tracks.map(track =>
        <div class="card-item">
        <img className="card-image" src={track.image[3]["#text"]}/>
        <div className="card-middle">
        <div class="card-text">{track.name}</div>
        </div>
        </div>  
        
        )}
  
      </div>
      
    );
  }

}

export default Track;