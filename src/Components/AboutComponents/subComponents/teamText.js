import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
        paddingLeft: '20px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'10px',
    }
  }));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function TeamText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant={"h2"}>
                Heres our team in action
            </Typography>
            <Typography variant={"h6"}>
                Opentrons is cool for lots of reasons i will write below
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor Ut enim ad minim veniam, 
                quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor

            </Typography>
        </div>
    )
}