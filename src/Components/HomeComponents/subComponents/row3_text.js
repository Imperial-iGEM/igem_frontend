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
        textAlign: 'right',
        alignContent: 'center',
        alignItems: 'center'
    },
    textSection:{
        paddingTop: '13%',
        paddingRight: '25px',
        paddingLeft: '25px',
        alignItems: 'center',
    }
  }));

export default function Row3Text(props){

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
                    Connecting Design & Build
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"}>
                    With progress in synthetic biology increasing rapidly,
                    academic labs need to be able to scale their experiments
                    easily to optimise their strains and yield, which means
                    building lots of constructs. Generating lab instructions based
                    on a genetic design therefore
                    presents a powerful way to automatically scale up protocols.
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"}>
                    Resorces: Combinatorial Design/SBOL
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h8"}>
                    About
                </WhiteTextTypography>
            </div>
        </div>
    )
}