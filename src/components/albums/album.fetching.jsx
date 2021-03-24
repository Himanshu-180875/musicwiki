import React,{ Component } from 'react'; 
import {Album}  from './album.component';
import './albums.component.css';
import './../../App.css';
class AlbumFetch extends Component {
    constructor() {
      super();
      this.state = {
       albums: [],
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
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${this.props.children}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({albums:users.albums}));
  }

  render(){

    return (
     
      
     
      <div>
      <button className="tabs-button" onClick={this.handleClick}>Albums</button>
      {this.state.isToggleOn? this.state.albums.album.map(item =>
      <div class="card-item">
          <img className="card-image" src={item.image[3]["#text"]}/>
          <div className="card-middle">
            <div class="card-text">{item.name}</div>
          </div>
        </div>  
      ): null}
  
      </div>
      
    );
  }

}

export default AlbumFetch;