import React, {useState, useEffect} from 'react'
import {Grid, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Row1Text from './subComponents/row1_text'
import Row1Image from './subComponents/row1_image'
import Row2Text from './subComponents/row2_text'
import Row2Image from './subComponents/row2_image'
import Row3Text from './subComponents/row3_text'
import ThisAnimation from './subComponents/lottie'
import Row4Text from './subComponents/row4_text'
import Row4Image from './subComponents/row4_image'
import Row5Text from './subComponents/row5_text'
import Row5Image from './subComponents/row5_image'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    whiteGrid: {
      height: '100%'
    },
    pinkGrid: {
      backgroundColor: "#FF6F90",
      height: '100%',
      minHeight: '550px',
    },
    darkblueGrid: {
      backgroundColor: "#324460",
      minHeight: '550px',
    },
    blueGrid: {
      backgroundColor: "#859FE1",
      minHeight: '550px',
    },
    lightblueGrid: {
      backgroundColor: "#C7EEFF",
      minHeight: '550px',
    },
    mainGrid: {
        alignItems:"center",
    },
    lottieAnimation: {
        paddingTop: '2%',
    },
    generalSpacing: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    generalImage: {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(2),
    }
  }));

export default function Home(props)  {

    const classes = useStyles();

    return (
      <div>
          <Grid className={classes.mainGrid} container>


                <Grid item xs={4} className={classes.whiteGrid}>
                    <div>
                        <Row1Text />
                    </div>
                </Grid>
                <Grid item xs={8} className={classes.whiteGrid}>
                    <div>
                        <Row1Image />
                    </div>
                </Grid>

            <Grid container xs={12} className={classes.pinkGrid}>
              <Grid item xs={6} className={classes.pinkGrid}>
                    <div className={classes.generalSpacing}>
                        <Row2Text />
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.pinkGrid}>
                    <div className={classes.generalSpacing}>
                        <Row2Image />
                    </div>
                </Grid>
            </Grid>
            <Grid container xs={12} className={classes.darkblueGrid}>
                <Grid item  xs={6} className={classes.darkblueGrid}>
                    <div className={classes.generalSpacing}>

                        <div className={classes.lottieAnimation}>
                            <ThisAnimation />
                            </div>
                    </div>
                </Grid>

                <Grid item xs={6} className={classes.darkblueGrid}>
                    <div className={classes.generalSpacing}>
                        <Row3Text />
                    </div>
                </Grid>
            </Grid>
            <Grid container xs={12} className={classes.blueGrid}>
                <Grid item xs={6} className={classes.blueGrid}>
                    <div className={classes.generalSpacing}>
                        <Row4Text />
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.blueGrid}>
                    <div className={classes.generalSpacing}>
                        <Row4Image />
                    </div>
                </Grid>
            </Grid>
            <Grid container xs={12} className={classes.lightblueGrid}>
                <Grid item xs={8} className={classes.lightblueGrid}>
                    <div className={classes.generalImage}>
                        <Row5Image />
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.lightblueGrid}>
                    <div className={classes.generalSpacing}>
                        <Row5Text />
                    </div>
                </Grid>
            </Grid>
              </Grid>
     </div>
    );
}
