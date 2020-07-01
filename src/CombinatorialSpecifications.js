import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import MenuDraw from "./MenuDraw";
import PartsSelection from "./PartsSelection";
import ConstructViewer from "./ConstructViewer";
import AssemblyMethod from "./AssemblyMethod";
import Annotations from "./Annotations";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import ConstructSelection from "./ConstructSelection";
import DoE from "./DoE";
import Preview from "./Preview";
import ProtocolSelect from "./ProtocolSelect";
import RobotSelect from "./RobotSelect";
import Generate from "./Generate";


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
                <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={10}>
                    <Grid container item justify="space-evenly" alignItems="flex-start" spacing={3} >
                        <Grid item xs className={classes.preview}>
                            <Preview/>
                        </Grid>
                        <Grid item xs className={classes.topRow}>
                            <PartsSelection className={classes.PartsSelection}/>
                        </Grid>

                    </Grid>
                    <Grid container direction="row"  alignItems="flex-end"  justify="space-around" item spacing={1} >
                        <Grid item xs className={classes.topRow}>
                            <AssemblyMethod className={classes.AssemblyMethod}/>
                        </Grid>
                        <Grid item xs className={classes.topRow}>
                            <Annotations className={classes.Annotations} />
                        </Grid>
                    </Grid>
                </Grid>
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
    PartsSelection: {
        flex: 4,
        maxWidth: 10
    },
    ConstructViewer: {
        flex: 2,
        maxWidth: 10
    },
    AssemblyMethod: {
        flex: 3,
        maxWidth: 10
    },
    Annotations: {
        flex: 1,
        maxWidth: 10
    },
    preview:{
        height: '50vh',
    }

}));
