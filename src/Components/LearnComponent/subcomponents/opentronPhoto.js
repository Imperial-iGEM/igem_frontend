import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
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


export default function OpentronsPhoto(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={Container}>
                <img src={process.env.PUBLIC_URL + 'opentronsAbout.jpg'} width="100%" alt="help robot" />
            </div>
        </div>
    )
}