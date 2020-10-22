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
        paddingTop: '12%',
        paddingRight: '25px',
        paddingLeft: '25px',
        alignItems: 'center',
    }
  }));

export default function Row5Text(props){

    const classes = useStyles();

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        background: ''
    };

    return(
        <div className={classes.root}>
            <Typography variant={"h2"}>
                Who are we?
            </Typography>
            <Typography variant={"h6"}>
                SOAP Lab was born out of a need for more computational
                tools for synthetic biologists in a year where software
                tools have become indispensable and software teams in iGEM
                were for the first time able to win the Grand Prize.

                Our team is composed of bioengineers, biochemists, computer
                scientists and physicists studying at Imperial College London.
                Meet the whole team here!
            </Typography>
        </div>
    )
}