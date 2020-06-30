import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import MenuDraw from "./MenuDraw";
import PartsSelection from "./PartsSelection";
import ConstructViewer from "./ConstructViewer";
import AssemblyMethod from "./AssemblyMethod ";
import Annotations from "./Annotations ";
import {makeStyles} from "@material-ui/core/styles";


export default function GeneDesign(props) {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({})
    let currentLocation = useLocation();
    const classes = useStyles();

    //Custom function to intercept tab selection to allow for saving of data etc before changing tabs.
    let handleTabSelection = function (location, index) {
@ -23,5 +28,28 @@ export default function CombinatorialSpecifications(props) {
            }}
        />)
    }
    return (<MenuDraw {...props} handleTabSelection={handleTabSelection}/>)


    return (
        <div>
            <MenuDraw {...props} handleTabSelection={handleTabSelection}/>
            <div className={classes.root}>
                <PartsSelection/>
                <ConstructViewer/>
                <AssemblyMethod/>
		<Annotations/>

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