import React,{ Component} from 'react';
import {Link} from 'react-router-dom';
import './ArtistDetail.component.css';
import BackRoute from './ArtistDetailsStats.component';
class ArtistDetails extends Component{
    constructor() {
        super();
        this.state = {
         data: [],
         tracks:[],
         albums:[]
        };
      }
      
      componentDidMount(props) {
        Promise.all([fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.props.match.params.name}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
        .then(response =>response.json()),
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${this.props.match.params.name}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
        .then(response =>response.json()),
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.props.match.params.name}&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json`)
        .then(response =>response.json())])
       
        .then(([users,items,names]) => {
            this.setState({
                data: users.artist,
                tracks: items.toptracks,
                albums:names.topalbums
            });
            
            })
       
      
      
        
        
      }
          

    render(){
  
            return(
               
            <div>
                <BackRoute></BackRoute>
                <div className="bg-image" style={{backgroundImage: "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}>
                    <h1 className="artist-detail-heading">{this.state.data.name ? this.state.data.name : null}</h1>
                    <div className="artist-detail-counter">   
                        <p className="followers">
                        <span>{this.state.data.stats ? this.state.data.stats.listeners : null} </span>
                        <span>Playcount</span>
                        </p>
                        <p className="playcount">
                            <span>{this.state.data.stats ? this.state.data.stats.playcount : null}</span>
                            <span>Followers</span>
                        </p>
                    </div>
                </div>
                <ul className="tags-wrapper">
                    {this.state.data.tags ? this.state.data.tags.tag.map(item => 
                        <li className="genre-tags tags-wrapper-item">
                            <Link className="genre-link" to={`/genre/${item.name}`}>{item.name}</Link>
                        </li>
                    ) : null}
                </ul>
                <p className="description">{this.state.data.bio ? this.state.data.bio.summary : null}</p>    
                
                <h3 style={{marginLeft: 15 + 'px'}}>Top Tracks</h3>
                <div className="inline-card-wrapper">
                {(this.state.tracks && this.state.tracks.track) ? this.state.tracks.track.map(item => 
                
                    <div className="card-item">
                        <img className="card-image" src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        <div className="card-middle">
                            <div className="card-text">
                                {item.name}
                            </div>
                        </div>
                    </div>
                ): null}
                </div>
                
               





                <h3 style={{marginLeft: 15 + 'px'}}>Top Albums</h3>
                <div className="inline-card-wrapper">
                {this.state.albums.album ? this.state.albums.album.map(item =>
                        <div class="card-item">
                            <img className="card-image" src={item.image[3]["#text"]}/>
                            <div className="card-middle">
                                <div class="card-text">
                                    <Link className="genre-link" to={`/album/${item.name}/${this.state.data.name}`}>{item.name}</Link>
                                </div>
                            </div>
                        </div>
                    ): null}
                </div>
                </div>
               
            )
            }
        }
         
         export default ArtistDetails;    