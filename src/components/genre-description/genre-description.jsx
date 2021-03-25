import React,{Component } from 'react'; 
import AlbumFetch from '../albums/album.fetching';
import Artist  from '../artists/artist.component';
import Track  from '../tracks/track.component';
import './genre-description.component.css';
import BackRoute from './../ArtistDetails/ArtistDetailsStats.component';
// import {Album} from '../albums/album.component';

 
class Des extends Component {
  constructor() {
    super();
    this.state={
      description :'',
      isAlbum: false,
      track: false,
      isArtist:false
    };
    this.getAlbums = this.getAlbums.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.getArtist = this.getArtist.bind(this);
   
  }

  getAlbums(){
    this.setState(state => (
      {
        isAlbum: !state.isAlbum
      }
    ));
  }
  getTracks(){
    this.setState(state => (
      {
        track: !state.track
      }
    ));
  }
  getArtist(){
    this.setState(state => (
      {
        isArtist: !state.isArtist
      }
    ));
  }

 componentDidMount() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${this.props.match.params.name}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({description:users.tag.wiki.summary}));
  }

  
  render(){

    return (
     
      <div className="App">
        <BackRoute></BackRoute>
        <h1 className="text-transform">{this.props.match.params.name}</h1>
        <h3 className="genre-dedscription">{this.state.description}</h3>
        <button className="tabs-button active" onClick={this.getAlbums}>Albums</button>
      
        <button className="tabs-button" onClick={this.getTracks}>Tracks</button>
      
        <button className="tabs-button" onClick={this.getArtist}>Artists</button>

        {this.state.isAlbum? <AlbumFetch >{this.props.match.params.name}</AlbumFetch>:null}
        {this.state.track? <Track>{this.props.match.params.name}</Track>:null}
        {this.state.isArtist? <Artist>{this.props.match.params.name}</Artist>:null}
      </div>
      
    );
  }

}
export default Des;