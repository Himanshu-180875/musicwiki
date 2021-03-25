import React,{ Component } from 'react'; 
import {Album}  from './album.component';
import {Link} from 'react-router-dom';
import './albums.component.css';
import './../../App.css';
class AlbumFetch extends Component {
    constructor() {
      super();
      this.state = {
       albums: []
      
      };
        
    }

   

componentDidMount(props) {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${this.props.children}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({albums:users.albums.album}));
  }

  render(){

    return (
     
      
     
        <div>
        
        {this.state.albums.map(item =>
          <div class="card-item">
            <img className="card-image" src={item.image[3]["#text"]}/>
            <div className="card-middle">
              <div class="card-text"><Link to={`/album/${item.name}/${item.artist.name}`}>{item.name}</Link></div>
            </div>
          </div>  
      )}
      </div>
  
      
    );
  }

}

export default AlbumFetch;