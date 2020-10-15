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
    
    //const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);



    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }; // Triggered whenever we take a new value


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
                    <RadioGroup aria-label="position" name="position" defaultValue="top" onChange={props.handleDnaAssemblyChange}>
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
                        value="bio_bricks"
                        control={<Radio color="primary" />}
                        label="Bio Bricks"
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
