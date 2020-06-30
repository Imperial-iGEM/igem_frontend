import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import MenuDraw from "./MenuDraw";
import ConstructSelection from "./ConstructSelection";
import DoE from "./DoE";
import AssemblyMethod from "./AssemblyMethod";
import ProtocolSelect from "./ProtocolSelect";
import Preview from "./Preview";
import RobotSelect from "./RobotSelect";
import Generate from "./Generate";
import {makeStyles} from "@material-ui/core/styles";


export default function CombinatorialSpecifications(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    let currentLocation = useLocation();
    const classes = useStyles();

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.
    let handleTabSelection = function (location, index) {
        console.log(`In GenerateProtocol Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
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
                <ConstructSelection />
                <DoE />
                <AssemblyMethod />
		            <ProtocolSelect  />
                <Preview  />
                <RobotSelect  />
                <Generate  />
            </div>
        </div>
    )
}



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 60,
        justifyContent: 'center',
        margin: 20,

    },


}));
