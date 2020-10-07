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
        paddingLeft: '2%',
        paddingTop: '3%',
    }
  }));

export default function Row5Image(props){

    const classes = useStyles();


    return(
        <div className={classes.imagePosition}>
            <img src={process.env.PUBLIC_URL + 'teamCropped.png'} height="400px" alt="robot"/>
        </div>
    )
}