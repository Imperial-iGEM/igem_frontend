import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Specifications from "./Pages/Specifications";
import HomeComponent from "./PageComponents/HomeComponents/HomeComponent";
import Home from './Pages/SBOLDesigner';
import SimpleTabs from "./Pages/SimpleTabs";
import About from "./PageComponents/AboutComponents/About";


function App() {
    const [sideBarCategories] = useState([
        {text: 'Home', path: '/'}, 
        {text: 'Gene Design',path: 'gene_design'},

        {text: 'SimpleTabs', path: '/SimpleTabs'},
        {text: 'HomeComponent', path: '/HomeComponent'},
        {text: 'About', path: '/About'},
    ])
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home name="Soap Lab - Automated DNA Assembly" sideBarCategories={sideBarCategories}/>
                    </Route>



                    <Route exact path="/gene_design">
                        <Specifications name="Imperial iGEM 2020 – Gene Design" sideBarCategories={sideBarCategories}/>
                    </Route>





                    <Route path="/SimpleTabs">
                        <SimpleTabs name="File Upload" sideBarCategories={sideBarCategories}/>
                    </Route>

                    <Route path="/HomeComponent">
                        <HomeComponent name="HomeComponent" sideBarCategories={sideBarCategories}/>
                    </Route>

                    <Route path="/About">
                        <About name="About" sideBarCategories={sideBarCategories}/>
                    </Route>
                </Switch>

            </div>
        </Router>


    )
}

export default App