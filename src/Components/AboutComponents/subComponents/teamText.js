import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    textSection:{
        paddingLeft: '30px',
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


export default function TeamText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h2"}>
                    Our pipeline in action
                </Typography>
                <Typography variant={"h6"}>
                    Our user interface makes it possible to get a fully fledged 
                    assembly script for your Opentrons just from your genetic 
                    design. We work with the SBOL standard to make our code 
                    integrable with other software pipelines, especially through 
                    our SBOL Parser.

                    All our assembly protocols are tested on our shared Opentrons in 
                    Opencell London and through testing with other iGEM teams (thank 
                    you Hamburg!). We are also in the process of linking our software 
                    into GALAXY SynBio-CAD, a workflow platform for synthetic 
                    biology software tools.
                </Typography>
            </div>
        </div>
    )
}