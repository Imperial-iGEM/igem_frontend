import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
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


export default function ModellingText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h6"}>
                    Having a genetic design is all in order, but the ability to analyse its plausibility and dynamic range can determine the success of a transformation. We found that a lot of iGEM teams have very little experience with modelling, so we worked hard to put together a mentorship package. 
                </Typography>
                <Typography variant={"h6"}>
                    If you wanna fresh up on your modelling knowledge, check out our LaTeX or PDF intro package, complete with explanations and coding challenges in deterministic modelling, stochastic modelling, and modelling in practice.
                </Typography>
            </div>
        </div>
    )
}