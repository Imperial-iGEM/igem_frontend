import React, {useState, useEffect} from 'react'
import {Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import OurStory from './subComponents/ourStory'
import OpentronsAbout from './subComponents/opentrons'
import OpentronsText from './subComponents/opentronsText'
import TeamText from './subComponents/teamText'
import TeamPhoto from './subComponents/teamPhoto'
import Lotty from './subComponents/lotty'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    generalSpacing: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

export default function About(props)  {

    const classes = useStyles();

    return (
      <div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
                <div className={classes.generalSpacing}>
                    <OurStory />
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className={classes.generalSpacing}>
                    <OpentronsAbout />
                </div>
            </Grid>
            <Grid item xs={8}>
                <div className={classes.generalSpacing}>
                    <OpentronsText />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.generalSpacing}>
                    <TeamText />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.generalSpacing}>
                    <TeamPhoto />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.generalSpacing}>
                    <Lotty />
                </div>
            </Grid>
          </Grid>
     </div>
    );
}
