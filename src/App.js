import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// import logo from './logo.svg';
import Gfetching  from './components/genre-component/genre-fetching';
import Des from './components/genre-description/genre-description';
import AlbumDetails from './components/AlbumDetails/AlbumDetails.component';
import ArtistDetails from './components/ArtistDetails/ArtistDetails.component';
import './App.css';
function App(){
  return(
    <switch>
    <Route exact path='/musicwiki' component={Gfetching}/>
    <Route exact path='/genre/:name' component ={Des} />
    <Route exact path='/artist/:name' component ={ArtistDetails} />
    <Route exact path='/album/:name/:id' component ={AlbumDetails} />
   
    </switch>
    
   
    
    );
}
export default App;
