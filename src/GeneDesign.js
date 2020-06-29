import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import MenuDraw from "./MenuDraw";


export default function GeneDesign(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    let currentLocation = useLocation();

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
    return (<MenuDraw {...props} handleTabSelection={handleTabSelection}/>)
}
