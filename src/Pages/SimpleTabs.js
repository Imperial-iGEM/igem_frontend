import React, {useState} from 'react';
import { makeStyles,Tabs, Tab, AppBar } from '@material-ui/core';
import SBOLValidator from "../SBOLValidation/SBOLValidator";
import FileUpload from "../SBOLValidation/FileUpload";
import TutorialButton from "../PageComponents/TutorialButton"
import {Redirect, useLocation} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function SimpleTabs(props) {
    //const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({});
    let currentLocation = useLocation();

//the value is which tab is selected


    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }; // Triggered whenever we take a new value


    let handleTabSelection = function (location, index) {
        console.log(`In GeneDesign Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        setNavigateTo({path: location.path, push: true, state: {referrer: currentLocation}})
        setNavigate(true)
    }

    if (navigate) {
        return (<Redirect
            to={{
                pathname: navigateTo.path,
                push: navigateTo.push,
                state: navigateTo.state
            }}
        />)
    }

    return (

        <>
            <AppBar position ="static" style={{ background: '#C4C4C4' }}>

                <Tabs
                value={selectedTab}
                onChange={handleChange}
                indicatorColor="#FF6F90"
                textColor="primary"
                centered
                variant="standard">

                <Tab label="Upload File"  title={"Upload to SBOLDesigner without validating"}>
                </Tab>

                <Tab label="Upload File and Validate" title={"Upload to SBOLDesigner after validating"}>
                </Tab>
                <img src={process.env.PUBLIC_URL + 'help_outline.svg'} title="Upload without validating" alt="help robot"/>

            </Tabs>

            </AppBar>
            {selectedTab === 1 && <SBOLValidator/>}
            {selectedTab === 0 && <FileUpload/>}
        <div>
            <TutorialButton></TutorialButton>
        </div>
            </>
    );
}
