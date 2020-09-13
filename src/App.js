import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FileUpload from './FileUpload'
import GeneDesign from "./GeneDesign";
import HomeComponent from "./PageComponents/HomeComponents/HomeComponent";
import Home from './Home';
import CombinatorialSpecifications from "./CombinatorialSpecifications";
import GenerateProtocol from "./GenerateProtocol";
import SimpleTabs from "./PageComponents/SimpleTabs";
import About from "./PageComponents/InfoComponents/About"
function App() {
    const [sideBarCategories, setSideBarCategories] = useState([{text: 'Home', path: '/'}, {
        text: 'Gene Design',
        path: 'gene_design'
    }, {text: 'Combinatorial Specifications', path: '/combinatorial_specifications'}, {
        text: 'Generate Protocol',
        path: '/generate_protocol'
    },
        {        text: 'SimpleTabs', path: '/SimpleTabs'},

        {        text: 'HomeComponent', path: '/HomeComponent'}

    ])
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home name="Imperial iGEM 2020 – Home" sideBarCategories={sideBarCategories}/>
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

                </Switch>

            </div>
        </Router>


    )
}

export default App