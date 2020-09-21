import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import GeneDesign from "./GeneDesign";
import HomeComponent from "./PageComponents/HomeComponents/HomeComponent";
import Home from './Home';
import CombinatorialSpecifications from "./CombinatorialSpecifications";
import GenerateProtocol from "./GenerateProtocol";
import SimpleTabs from "./PageComponents/SimpleTabs";
import About from "./PageComponents/InfoComponents/About";

import ScriptGenerator from "./PageComponents/ScriptGeneratorComponents/ScriptGenerator.component"

function App() {
    const [sideBarCategories] = useState([
        {text: 'Home', path: '/'}, 
        {text: 'Script Generation', path: 'script_generation'},
        {text: 'Gene Design',path: 'gene_design'},
        {text: 'Combinatorial Specifications', path: '/combinatorial_specifications'},
        {text: 'Generate Protocol',path: '/generate_protocol'},
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

                    <Route exact path="/script_generator">
                        <ScriptGenerator name="Script Generator" sideBarCategories={sideBarCategories}/>
                    </Route>

                    <Route exact path="/gene_design">
                        <GeneDesign name="Imperial iGEM 2020 – Gene Design" sideBarCategories={sideBarCategories}/>
                    </Route>

                    <Route exact path="/combinatorial_specifications">
                        <CombinatorialSpecifications name="Imperial iGEM 2020 – Combinatorial Specifications"
                                                     sideBarCategories={sideBarCategories}/>
                    </Route>

                    <Route path="/generate_protocol">
                        <GenerateProtocol name="Imperial iGEM 2020 – Generate Protocol"
                                          sideBarCategories={sideBarCategories}/>
                    </Route>

                    <Route path="/SimpleTabs">
                        <SimpleTabs name="TABBO" sideBarCategories={sideBarCategories}/>
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