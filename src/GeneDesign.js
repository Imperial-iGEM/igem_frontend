import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import MenuDraw from "./MenuDraw";
import PartsList from "./PageComponents/PartsList";
import ConstructViewer from "./PageComponents/ConstructViewer";
import PartsInfo from "./PageComponents/PartsInfo";
import LabHardware from "./PageComponents/LabHardware";
import Outputfiles from "./PageComponents/OutputFiles";
import {makeStyles} from "@material-ui/core/styles";

export default function GeneDesign(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    let currentLocation = useLocation();
    const classes = useStyles();

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.
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
            <MenuDraw {...props} handleTabSelection={handleTabSelection}/>
            <div className={classes.root}>
                <PartsList/>
                <ConstructViewer/>
                <PartsInfo/>
                <LabHardware/>
            </div>
            <div>
                <Outputfiles/>
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
    }
}));
