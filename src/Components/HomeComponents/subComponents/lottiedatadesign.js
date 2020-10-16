import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './lottiedatadesign/lf30_uq79sbpk.json';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100%',
    },}));

export default function ThisDesignAnimation() {

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
          //height={432}
         // width={786}
        />
      </div>
    );
  }