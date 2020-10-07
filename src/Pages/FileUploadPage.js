import React, {useState} from 'react';
import { makeStyles,Tabs, Tab, AppBar } from '@material-ui/core';
import SBOLValidator from "../SBOLValidation/SBOLValidator";
import FileUpload from "../SBOLValidation/FileUpload";
import TutorialButton from "../SBOLValidation/TutorialButton"
import {Redirect, useLocation} from "react-router-dom";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    radioAssembly: {
        textAlign: 'center',
        padding: '15px',
    }
});

export default function FileUploadPage(props) {
    const classes = useStyles();
    
    // To Use Radio Buttons
    const [value, setValue] = React.useState('basic');

    // To Control Radio buttons
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    //const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({});
    let currentLocation = useLocation();

//the value is which tab is selected


    const handleTabChange = (event, newValue) => {
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
        <div>
            <AppBar position ="static" style={{ background: '#C4C4C4' }}>
                <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                indicatorColor="#FF6F90"
                textColor="primary"
                centered
                variant="standard">
                    <Tab label="Upload File"  title={"Upload to SBOLDesigner without validating"} />
                    <Tab label="Upload File and Validate" title={"Upload to SBOLDesigner after validating"} />
                </Tabs>

            </AppBar>
            <div className={classes.radioAssembly}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Which DNA Assembly method would you like to use?</FormLabel>
                    <RadioGroup aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                        value="basic"
                        control={<Radio color="primary" />}
                        label="Basic"
                        labelPlacement="right"
                        />
                        <FormControlLabel
                        value="moclo"
                        control={<Radio color="primary" />}
                        label="Mo Clo"
                        labelPlacement="right"
                        />
                        <FormControlLabel
                        value="goldengate"
                        control={<Radio color="primary" />}
                        label="Golden Gate"
                        labelPlacement="right"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
                {selectedTab === 1 && <SBOLValidator/>}
                {selectedTab === 0 && <FileUpload/>}
            <div>
                <TutorialButton></TutorialButton>
            </div>
        </div>
    );
}
