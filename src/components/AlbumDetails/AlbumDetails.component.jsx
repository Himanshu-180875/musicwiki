import React,{ Component } from 'react';
// import Genre  from './genre-component';
import Album from './Album-Genre.component'; 

class AlbumDetails extends Component {
    constructor() {
      super();
      this.state = {
          data:[]
      };
    }
  
   componentDidMount() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=afd5ef428b7d104bd4ccdc3146c59390&artist=${this.props.match.params.id}&album=${this.props.match.params.name}&format=json`)
    .then(response =>response.json())
    .then(users => this.setState({data:users.album}));
      
      
    }
  
    
    render(){
  
     return(
        
        <div>
          <Album album={this.props.match.params.name}>{this.props.match.params.id} </Album>
        
         
        

         
         </div>
        
     )
    }
  
  }
  export default AlbumDetails;