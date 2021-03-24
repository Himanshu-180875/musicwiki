import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// import logo from './logo.svg';
import Gfetching  from './components/genre-component/genre-fetching';
import Des from './components/genre-description/genre-description';
import './App.css';
function App(){
  return(
    <switch>
    <Route exact path='/' component={Gfetching}/>
    <Route exact path='/genre/:name' component ={Des} />
   
    </switch>
    
   
    
    );
}
export default App;
