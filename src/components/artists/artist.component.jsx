import React,{ Component } from 'react'; 
import './../../App.css';
class Artist extends Component {
    constructor() {
      super();
      this.state = {
       artist: [],
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
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${this.props.children}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({artist:users.topartists}));
  }

  render(){

    return (
     
      <div>
        <button className="tabs-button" onClick={this.handleClick}>Artists</button>
        {this.state.isToggleOn? this.state.artist.artist.map(artist =><h1>{artist.name}</h1>): null}
      </div>
      
    );
  }

}

export default Artist;