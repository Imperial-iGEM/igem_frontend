import React from 'react'
import {Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import ContactHeader from './subcomponents/header';
import EMAILText from './subcomponents/email';
import TWITTERText from './subcomponents/twitter';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'center',
    },
    mainGrid: {
        alignItems:"center",
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
    },
    generalSpacing: {
        padding: '10%'
    }
  }));

export default function Contact(props)  {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.mainGrid} container spacing={1}>
                <Grid item xs={12}>
                    <ContactHeader />
                </Grid>
                <Grid item xs={6}>
                    <EMAILText />
                </Grid>
                <Grid item xs={6}>
                    <TWITTERText />
                </Grid>
            </Grid>
        </div>

    );
}
