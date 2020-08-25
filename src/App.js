import React, {useState} from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import SBOLAPIClass from "./SBOLValidation/SBOLAPIClass";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FileUpload from './FileUpload'
import MenuDraw from './MenuDraw'
import GeneDesign from "./GeneDesign";
import Home from './Home';
import CombinatorialSpecifications from "./CombinatorialSpecifications";
import GenerateProtocol from "./GenerateProtocol";
// new Page
import SBOLValidator from './SBOLValidation/SBOLValidator';

function App() {
    const [sideBarCategories, setSideBarCategories] = useState([{text: 'Home', path: '/'}, {
        text: 'Gene Design',
        path: 'gene_design'
    }, {text: 'Combinatorial Specifications', path: '/combinatorial_specifications'}, {
        text: 'Generate Protocol',
        path: '/generate_protocol'
    }, {text: 'File Upload', path: '/file_upload'}, {
        text: 'SBOL Validator', path: '/SBOLValidator'
    }

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
                    <Route path="/SBOLValidator">
                        <SBOLValidator name="SBOLValidator"
                                          sideBarCategories={sideBarCategories}/>
                    </Route>
                    <Route path="/file_upload">
                        <FileUpload name="Imperial iGEM 2020 – File Upload" sideBarCategories={sideBarCategories}/>
                    </Route>
                </Switch>

            </div>
        </Router>


    )
}

export default App