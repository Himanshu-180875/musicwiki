import React,{Component } from 'react'; 
import AlbumFetch from '../albums/album.fetching';
import Artist  from '../artists/artist.component';
import Track  from '../tracks/track.component';
import './genre-description.component.css';
// import {Album} from '../albums/album.component';

 
class Des extends Component {
  constructor() {
    super();
    this.state={
      description :'',
      isToggleOn: false,
      isClicked: false,
      isPressed:false
    };
    this.handleClick = this.handleClick.bind(this);
    this.pressedClick = this.pressedClick.bind(this);
    this.isClick = this.isClick.bind(this);
   
  }

  handleClick(){
    this.setState(state => (
      {
        isToggleOn: !state.isToggleOn
      }
    ));
  }
  pressedClick(){
    this.setState(state => (
      {
        isClicked: !state.isClicked
      }
    ));
  }
  isClick(){
    this.setState(state => (
      {
        isPressed: !state.isPressed
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
      <button className="tabs-button" onClick={this.handleClick}>Albums</button>
      {this.state.isToggleOn? <AlbumFetch >{this.props.match.params.name}</AlbumFetch>:null}
      <button className="tabs-button" onClick={this.pressedClick}>Tracks</button>
      {this.state.isClicked? <Track>{this.props.match.params.name}</Track>:null}
      <button className="tabs-button" onClick={this.isClick}>Artists</button>
      {this.state.isPressed? <Artist>{this.props.match.params.name}</Artist>:null}
      </div>
      
    );
  }

}
export default Des;