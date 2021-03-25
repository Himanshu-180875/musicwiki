import React,{ Component } from 'react'; 
import {Link} from 'react-router-dom';
import BackRoute from './../ArtistDetails/ArtistDetailsStats.component';

class Album extends Component {
    constructor() {
      super();
      this.state = {
       genres: []
      
      };
    }

      componentDidMount(props) {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=album.gettoptags&artist=${this.props.children[0]}&album=${this.props.album}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
        .then(response =>response.json())
        .then(users => this.setState({genres:users.toptags.tag}));
      }
      render(){
  
        return(
              <div>
                <BackRoute></BackRoute>
                <div className="bg-image" style={{backgroundImage: "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}>
                  <h1 className="artist-detail-heading">{this.props.album}</h1>
                  <h1 className="artist-detail-heading">{this.props.children[0]}</h1>
                </div>
                <ul className="tags-wrapper">
                    {this.state.genres ? this.state.genres.map(item => 
                        <li className="genre-tags tags-wrapper-item">
                            <Link className="genre-link" to={`/genre/${item.name}`}>{item.name}</Link>
                        </li>
                    ) : null}
                </ul>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>    
              </div>       
           
        )
       }
        
    }

    export default Album;