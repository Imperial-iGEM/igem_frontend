import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    imagePosition:{
        textAlign: 'right',
    }
  }));

export default function Row1Image(props){

    const classes = useStyles();


    return(
        <div className={classes.imagePosition}>
            <img src={process.env.PUBLIC_URL + 'CroppedHelper2.png'} height="850px" alt="robot"/>
        </div>
    )
}