import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/home';
import District from './Pages/District';

import Vaccine from './Pages/Vaccine';
import Pin from './Pages/Pin';
function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path="/">
          <Home/>   
           
        </Route>
 
        <Route path ="/district">
          <District/>            
        </Route>
        <Route path ="/pin">
          <Pin/>            
        </Route>
        <Route path ="/vaccine">
          <Vaccine/>            
        </Route>
            
        </Router>
        
         
    </div>
  );
}

export default App;
