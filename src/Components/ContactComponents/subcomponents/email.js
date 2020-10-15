import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'center',
        padding: '30px',
    },
    textSection:{
        paddingLeft: '20px',
        paddingRight: '20px',
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

export default function EMAILText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h4"}>
                    Email
                </Typography>
                <Typography variant={"h6"}>For support or any questions:</Typography>
                <a href="mailto:imperialigem@gmail.com">Email: imperialigem@gmail.com</a>
            </div>
        </div>
    )
}