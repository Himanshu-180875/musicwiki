import React,{ Component } from 'react';
import Genre  from './genre-component';

class Gfetching extends Component {
    constructor() {
      super();
      this.state = {
       genres: []
      };
    }
  
   componentDidMount() {
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json')
      .then(response =>response.json())
      .then(users => this.setState({genres:users.tags.tag}));
    }
  
    
    render(){
  
      return (
       
        <div className="App">
        
        <Genre>{this.state.genres}
        </Genre>
       
        </div>
        
      );
    }
  
  }
  export default Gfetching;