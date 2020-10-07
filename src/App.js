import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Components/HomeComponents/Home"
import About from "./Components/AboutComponents/About";
import Contact from "./Components/ContactComponents/Contact";
import NavBar from './Components/NavBarComponent/NavBar';
import ParentDesigner from './Pages/ParentDesigner';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/learn" component={Home}/>
          <Route path="/designer" component={ParentDesigner} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}

export default App