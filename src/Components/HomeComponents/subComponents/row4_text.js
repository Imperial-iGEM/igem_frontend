import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
        alignContent: 'center',
        alignItems: 'center'
    },
    textSection:{
        paddingTop: '12%',
        paddingRight: '25px',
        paddingLeft: '25px',
        alignItems: 'center',
    }
  }));

export default function Row4Text(props){

    const classes = useStyles();

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        background: ''
    };

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <WhiteTextTypography variant={"h2"}>
                    Automation Made Accessible
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"}>
                    Liquid handlers were once a commodity of
                    highly-capital biotech, but with Opentrons paving the way
                    for affordable, open-source labware, the average lab in the
                    UK can now afford to purchase such equipment.
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"}>
                    The same cannot yet be said for supporting biologist-friendly
                    software tools, meaning bench scientists have to code their
                    own scripts for each new protocol. SOAP Lab tries to bridge
                    the gap by letting synthetic biologists
                    generate their assembly protocols automatically and reproducibly.
                </WhiteTextTypography>
            </div>
        </div>
    )
}