import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import ThisWinkAnimation from './lottiedatawink'

const useStyles = makeStyles((theme) => ({
    imagePosition:{
        height:'850px'
    }
  }));

export default function Row1Image(props){

    const classes = useStyles();


    return(
        <div className={classes.imagePosition}>
            <ThisWinkAnimation />
            
        </div>
    )
}