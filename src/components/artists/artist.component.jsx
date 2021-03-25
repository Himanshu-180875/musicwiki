import React,{ Component } from 'react'; 
import './../../App.css';
import {Link} from 'react-router-dom';
class Artist extends Component {
    constructor() {
      super();
      this.state = {
       artist: []
       
      };
         
    }

   

componentDidMount(props) {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${this.props.children}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({artist:users.topartists.artist}));
  }

  render(){

    return (
     
      <div>
        
        { this.state.artist.map(artist =>
          <div class="card-item">
          <img className="card-image" src={artist.image[3]["#text"]}/>
          <div className="card-middle">
          <div class="card-text"><Link to={`/artist/${artist.name}`}>{artist.name}</Link></div>
          </div>
          </div>
          )}
      </div>
      
    );
  }

}

export default Artist;