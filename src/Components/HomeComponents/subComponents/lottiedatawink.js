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
        <Lottie 
          options={defaultOptions}
          height={850}
          width={715}
        />
      </div>
    );
  }