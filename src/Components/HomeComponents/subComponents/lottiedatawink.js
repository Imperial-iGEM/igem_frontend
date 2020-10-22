import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './lottiedatawink/lf30_spvlbbdz.json';

const useStyles = makeStyles((theme) => ({
    root:{
      textAlign: 'right',
      justifyContent: 'bottom',
      float:'bottom'
    },
    responsiveImage: {
      textAlign: 'center',
      [theme.breakpoints.up("xs")]:{
        height:"200px",
        width:"168px"
      },
      [theme.breakpoints.up("sm")]:{
        height:"400px",
        width:"336px"
      },
      [theme.breakpoints.up("md")]:{
        height:"650px",
        width:"546px"
      },
      [theme.breakpoints.up("lg")]:{
        height:"850px",
        width:"715px"
    }
  }
}));

export default function ThisWinkAnimation() {

    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className={classes.root}>
        <div className={classes.responsiveImage}>
          <Lottie 
            options={defaultOptions}
          />
        </div>
      </div>
    );
  }