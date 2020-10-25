import React, {useEffect, useState} from 'react'
import MethodChoice from "./SubComponents/MethodChoice.js";
import {Button, makeStyles} from "@material-ui/core";
import SBOLDesignerTutorial from "../../Pages/UploadTutorialSBOLDesigner.js";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

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
    const [openBasicLS, setOpenBasicLS] = useState(false);

    const handleClickBasicLS = () => {
        setOpenBasicLS(true);
    };
    const handleCloseBasicLS = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenBasicLS(false);
    };

    const classes = useStyles();

    return (
        <div className={classes.radioAssembly}>
            <MethodChoice dnaAssembly={props.dnaAssembly} handleDnaAssemblyChange={props.handleDnaAssemblyChange}/>
            <SBOLDesignerTutorial/>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.myGrid}
            >
                <Grid item xs={12} sm={6} md={3} >
                    <a href={process.env.PUBLIC_URL + 'SBOL/basic_linkers_standard.xml'} download style={{ textDecoration: 'none' }}>
                        <Button onClick={handleClickBasicLS} className={classes.myButton} variant="outlined" color="secondary">
                            Basic Linkers Standard
                        </Button>
                    </a>
                    <Snackbar open={openBasicLS} autoHideDuration={6000} onClose={handleCloseBasicLS}>
                        <Alert onClose={handleCloseBasicLS} severity="success">
                            Successfully Downloaded example Basic Linkers Standard SBOL File.
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
            <div className="webswing-element" data-webswing-instance="webswingInstance0" style={{height: '100vh'}}></div>
        </div>
    )
}

export default SBOLDesigner;
