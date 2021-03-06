import React from 'react';
import './App.scss';
import Home from './components/Home.js'
import MapChart from './components/MapChart.js'
import CaseStudies from './components/CaseStudies.js'
import Partnerships from './components/Partnerships.js'
import Games from './components/Games.js'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  
  return (
    <div className="App">

      <header className="App-header">
        <h4> Where's My Water </h4>
        <nav className="pages">
          <Link to="/" className="item-but"> Home </Link>
          <Link to="/Map" className="item-but"> Interactive Map </Link>
          <Link to="/Case Studies" className="item-but"> Case Studies </Link>
          <Link to="/Partnerships" className="item-but"> Partnerships </Link>
          <Link to="/Games" className="item-but"> Games </Link>
        </nav>
      </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Map">
            <MapChart />
          </Route>
          <Route exact path="/Case Studies">
            <CaseStudies />
          </Route>
          <Route exact path="/Partnerships">
            <Partnerships />
          </Route>
          <Route exact path="/Games">
            <Games />
          </Route>
        </Switch> 
      </div>
      
  );
}

export default App;
