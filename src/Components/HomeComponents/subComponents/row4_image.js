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
        textAlign: 'center',
        paddingTop: '7%',
    }
  }));

export default function Row4Image(props){

    const classes = useStyles();


    return(
        <div className={classes.imagePosition}>
            <img src={process.env.PUBLIC_URL + 'pippette.jpeg'} height="400px" alt="robot"/>
        </div>
    )
}