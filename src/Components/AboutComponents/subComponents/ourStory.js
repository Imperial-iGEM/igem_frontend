import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '90px',
        left:'40px',
    }
  }));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function OurStory(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={Container}>
                <img src={process.env.PUBLIC_URL + 'teamCropped.png'} width="100%" alt="help robot" />
                <div className={classes.bottomLeft}>
                    <WhiteTextTypography variant={"h1"}>
                        Our Story
                    </WhiteTextTypography>
                </div>
            </div>
        </div>
    )
}