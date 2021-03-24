import React, { Component } from 'react'; 
import './../../App.css';
class Track extends Component {
    constructor() {
      super();
      this.state = {
       tracks: [],
       isToggleOn: false
      };
         this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      this.setState(state => (
        {
          isToggleOn: !state.isToggleOn
        }
      ));
    }

componentDidMount(props) {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${this.props.children}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({tracks:users.tracks}));
  }

  render(){

    return (
        
     


       <div>
      <button className="tabs-button" onClick={this.handleClick}>Tracks</button>
      {this.state.isToggleOn? this.state.tracks.track.map(track =><h1>{track.name}</h1>): null}
  
      </div>
      
    );
  }

}

export default Track;