import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomeComponent from "./Components/HomeComponents/HomeComponent";
import About from "./Components/AboutComponents/About";
import Contact from "./PageComponents/AboutComponents/Contact";
import NavBar from './Components/NavBarComponent/NavBar';
import ParentDesigner from './Pages/ParentDesigner';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
          <Route path="/about" component={About}/>
          <Route path="/designer" component={ParentDesigner} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default App