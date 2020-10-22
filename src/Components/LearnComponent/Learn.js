import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import LearnHeader from './subcomponents/header';
import OpentronsPhoto from './subcomponents/opentronPhoto';
import SBOLPhoto from './subcomponents/SBOLPhoto';
import OpentronsText from './subcomponents/OpentronsText';
import SBOLText from './subcomponents/SBOLText';
import LearnFooter from './subcomponents/footer';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
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

export default function Learn(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid className={classes.mainGrid} container spacing={1}>
                <Grid item xs={12}>
                    <LearnHeader />
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.generalSpacing}>
                        <OpentronsPhoto />
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className={classes.generalSpacing}>
                        <OpentronsText />
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.generalSpacing}>
                        <SBOLPhoto />
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className={classes.generalSpacing}>
                        <SBOLText />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <LearnFooter />
                </Grid>
            </Grid>
        </div>
    )
}