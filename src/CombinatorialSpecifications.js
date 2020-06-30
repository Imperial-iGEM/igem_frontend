import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import MenuDraw from "./MenuDraw";
import PartsSelection from "./PartsSelection";
import ConstructViewer from "./ConstructViewer";
import AssemblyMethod from "./AssemblyMethod";
import Annotations from "./Annotations";
import {makeStyles} from "@material-ui/core/styles";


export default function CombinatorialSpecifications(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    let currentLocation = useLocation();
    const classes = useStyles();

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.
    let handleTabSelection = function (location, index) {
        console.log(`In CombinatorialSpecifications Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
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
            <MenuDraw {...props} handleTabSelection={handleTabSelection}/>
            <div className={classes.root}>
                <PartsSelection className={classes.PartsSelection}/>
                <ConstructViewer className={classes.ConstructViewer}/>
                <AssemblyMethod className={classes.AssemblyMethod}/>
		            <Annotations className={classes.Annotations} />

            </div>
        </div>
    )
}



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 600,
        justifyContent: 'center',
        margin: 20
    },
    Annotations: {
        flex: 1
    }
}));
