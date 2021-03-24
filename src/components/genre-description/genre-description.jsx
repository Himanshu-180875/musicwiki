import React,{Component } from 'react'; 
import AlbumFetch from '../albums/album.fetching';
import Artist  from '../artists/artist.component';
import Track  from '../tracks/track.component';
import './genre-description.component.css';
import {Album} from '../albums/album.component';

 
class Des extends Component {
  constructor() {
    super();
    this.state={
      description :'',
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

 componentDidMount() {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${this.props.match.params.name}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({description:users.tag.wiki.summary}));
  }

  
  render(){

    return (
     
      <div className="App">
      <h1 className="text-transform">{this.props.match.params.name}</h1>
      <h3 className="genre-dedscription">{this.state.description}</h3>
      <button className="tabs-button" onClick={this.handleClick}>NewLink</button>
      {this.state.isToggleOn? <Album /> : null}


      <AlbumFetch >{this.props.match.params.name}</AlbumFetch>
      <Track>{this.props.match.params.name}</Track>
      <Artist>{this.props.match.params.name}</Artist>
      
      
      </div>
      
    );
  }

}
export default Des;