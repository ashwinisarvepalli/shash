import React from 'react';
import './App.scss';
import MapChart from './components/MapChart.js'
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
        <div className="pages">
          <Link></Link>
          <Link to="/Case Studies" className="item-but">Case Studies</Link>
          <Link to="/AboutUs" className="item-but" >Sponsors/Partnerships</Link>
          <Link to="/GalleryView" className="item-but" >Gallery View</Link>
        </div>
      </header>
        <Switch>
          <Route exact path="/ListView">
            <ListView />
          </Route>
          <Route exact path="/GalleryView">
            <GalleryView />
          </Route>
          <Route exact path="/Details/:name">
            <Details />
          </Route>
        </Switch> 
      </div>
      <MapChart/>
  );
}

export default App;
