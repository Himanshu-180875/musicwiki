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
      
      {this.state.tracks.map(track =><h1>{track.name}</h1>)}
  
      </div>
      
    );
  }

}

export default Track;