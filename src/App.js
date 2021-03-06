import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Components/HomeComponents/Home"
import Learn from "./Components/LearnComponent/Learn"
import About from "./Components/AboutComponents/About";
import Contact from "./Components/ContactComponents/Contact";
import NavBar from './Components/NavBarComponent/NavBar';
import ParentDesigner from './Pages/ParentDesigner';
import { ApolloProvider } from '@apollo/client';
import {client} from "./index.js";



function App() {
  return (
    <Router>
        <ApolloProvider client={client}>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/learn" component={Learn}/>
                    <Route path="/designer" component={ParentDesigner} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </ApolloProvider>
    </Router>
  )
}

export default App
