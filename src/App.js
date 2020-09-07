import React, {useState} from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FileUpload from './FileUpload'
import GeneDesign from "./GeneDesign";
import Home from './Home';
import CombinatorialSpecifications from "./CombinatorialSpecifications";
import GenerateProtocol from "./GenerateProtocol";
// new Page
import SBOLValidator from './SBOLValidation/SBOLValidator';
import SimpleTabs from "./PageComponents/SimpleTabs";
function App() {
    const [sideBarCategories, setSideBarCategories] = useState([{text: 'Home', path: '/'}, {
        text: 'Gene Design',
        path: 'gene_design'
    }, {text: 'Combinatorial Specifications', path: '/combinatorial_specifications'}, {
        text: 'Generate Protocol',
        path: '/generate_protocol'
    },
        {        text: 'SimpleTabs', path: '/SimpleTabs'}

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
                </Switch>

            </div>
        </Router>


    )
}

export default App