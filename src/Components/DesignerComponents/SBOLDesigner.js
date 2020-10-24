import React, {useEffect} from 'react'
import MethodChoice from "./SubComponents/MethodChoice.js";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    radioAssembly: {
        textAlign: 'center',
        padding: '15px',
    }
});

function SBOLDesigner(props) {
    useEffect(() =>{
            const onLoad = window.dispatchEvent;
            const webswingFinction = window.webFunction;
            webswingFinction(window, document);
            onLoad(new Event('initialiseDesigner') );
    },[])
    // No longer used as designer doesn't support two way communication currently
    // useEffect(() => {
    //     function waitForPingService() {
    //         console.log("Waiting for service");
    //         if (typeof window.pingService !== "undefined") {
    //             window.runSend();
    //         } else {
    //             setTimeout(waitForPingService, 250);
    //         }
    //     }
    //
    //     waitForPingService();
    // }, [])

    const classes = useStyles();

    return (
        <div className={classes.radioAssembly}>
            <MethodChoice dnaAssembly={props.dnaAssembly} handleDnaAssemblyChange={props.handleDnaAssemblyChange}/>
            <div className="webswing-element" data-webswing-instance="webswingInstance0" style={{height: '100vh'}}></div>
        </div>
    )
}

export default SBOLDesigner;
