import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//import Specifications from "./Pages/Specifications";
import HomeComponent from "./PageComponents/HomeComponents/HomeComponent";
//import Home from './Pages/SBOLDesigner';
//import SimpleTabs from "./Pages/SimpleTabs";
import About from "./PageComponents/AboutComponents/About";

import NavBar from './PageComponents/NavBarComponent/NavBar';
import ExampleDesigner from './ExamplePages/Designer';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
          <Route path="/about" component={About}/>
          <Route path="/designer" component={ExampleDesigner} />
        </Switch>
      </div>
    </Router>
  )
}

export default App