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
import {Grid} from "@material-ui/core";

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
                <Grid container direction="column" spacing={10}>
                    <Grid container item spacing={3}>
                        <Grid item xs={4}>
                            <Grid container direction="row" item spacing={3}>
                                <Grid item>
                                    <ConstructSelection/>
                                </Grid>
                                <Grid item>
                                    <DoE/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <AssemblyMethod />
                        </Grid>
                        <Grid item xs={4}>
                            <Preview/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" item spacing={3} >
                        <Grid item xs={4}>
                            <ProtocolSelect/>
                        </Grid>
                        <Grid item xs={4}>
                                <RobotSelect/>
                        </Grid>
                        <Grid item xs={4}>
                            <Generate/>
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
        flexDirection: 'column',
        minHeight: 60,
        justifyContent: 'center',
        margin: 20,
    },

    columns: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 60,
        justifyContent: 'center',
        margin: 20,
    },
    topRow:{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 600,
        justifyContent: 'center',
        margin: 20,
        flex: 10
    },
    evenSplit:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        flex: 1
    },
    bottomRow:{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 60,
        justifyContent: 'center',
        margin: 20,
        flex: 1
    },
    topColumns:{
        flex: 1,
        maxWidth:100,
        margin:10
    }


}));
