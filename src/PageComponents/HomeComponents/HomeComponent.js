import React, {useState, useEffect} from 'react'
import {Grid, Card, CardContent, Paper, Typography} from "@material-ui/core";
import MenuDraw from "../../MenuDraw";
import {Redirect, useLocation} from "react-router-dom";
 import HomeComponentNavigator from "./HomeComponentNavigator";
import FirstHome from "./FirstHome";
import About from "../InfoComponents/About";

export default function HomeComponent(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({});
    let currentLocation = useLocation();

    let handleTabSelection = function (location, index) {
        console.log(`In GeneDesign Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        setNavigateTo({path: location.path, push: true, state: {referrer: currentLocation}})
        setNavigate(true)
    }
    /*<FirstHome/>
    <br/>
    <About/>
*/
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
<div display={"flex"} position={"relative"}>
        <MenuDraw {...props} handleTabSelection={handleTabSelection}/>
        <HomeComponentNavigator/>
<div>
    <FirstHome/>
    </div>

</div>
    )
}
