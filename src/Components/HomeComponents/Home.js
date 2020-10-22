import React from 'react'
import {Grid } from "@material-ui/core";
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';

import Row1Text from './subComponents/row1_text'

import Row2Text from './subComponents/row2_text'

import Row3Text from './subComponents/row3_text'
import ThisAnimation from './subComponents/lottie'

import Row4Text from './subComponents/row4_text'
import Row4Image from './subComponents/row4_image'

import Row5Text from './subComponents/row5_text'
import Row5Image from './subComponents/row5_image'

import ThisDesignAnimation from './subComponents/lottiedatadesign'
import ThisWinkAnimation from './subComponents/lottiedatawink'



const responsiveTheme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            small:320,
            small2:360,
            small3:410,
            small4:480,
            small5:540,
            sm: 600,

            medium1:768,
            medium2:800,
            md: 960,

            large1:1024,
            lg: 1280,

            extralarge1:1440,
            xl: 1920,
        },
    },
})


const useStyles = makeStyles((responsiveTheme) => ({
    root: {
      flexGrow: 1,
    },
    whiteGrid: {
      height: '850px',
      backgroundColor: "#FFFFFF",
    },
    pinkGrid: {
      backgroundColor: "#FF6F90",
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
    lottieAnimation: {
        paddingTop: '2%',
    },
    lottieWinkAnimation: {
        float:'right',
        maxHeight:"550px",

        [responsiveTheme.breakpoints.up("xs")]:{
            maxHeight:"171px",
        },
        [responsiveTheme.breakpoints.up("sm")]:{
            maxHeight:"321px"
        },
        [responsiveTheme.breakpoints.up("md")]:{
            maxHeight:"514px",
        },
        [responsiveTheme.breakpoints.up("lg")]:{
            height:"685px",
        }

    },
    generalImage: {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        padding: responsiveTheme.spacing(2),
    }}));

export default function Home(props)  {

    const classes = useStyles();

    return (
      <div>
          <Grid className={classes.mainGrid} container>
              <Grid container className={classes.mainGrid} xs={12}>
                <Grid item xs={6} className={classes.whiteGrid}>
                    <div>
                        <Row1Text />
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.whiteGrid}>
                    <div className={classes.lottieWinkAnimation}>
                        <ThisWinkAnimation />
                    </div>
                </Grid>
              </Grid>
            <Grid 
            container 
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
            className={classes.pinkGrid}
            spacing={2}
            >
                <Grid item xs={1} sm={1} />
                <Grid item xs={11} sm={5}>
                    <Row2Text />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ThisDesignAnimation />
                </Grid>
            </Grid>
            <Grid 
            container 
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
            className={classes.darkblueGrid}
            spacing={2}
            >
                <Grid item xs={12} sm={6}>
                    <ThisAnimation />
                </Grid>
                <Grid item xs={11} sm={5}>
                    <Row3Text />
                </Grid>
                <Grid item xs={1} sm={1} />
            </Grid>
            <Grid 
            container 
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
            className={classes.blueGrid}
            spacing={2}
            >
                <Grid item xs={1} sm={1} />
                <Grid item xs={11} sm={5}>
                    <Row4Text />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Row4Image />
                </Grid>
            </Grid>
            <Grid 
            container 
            direction="row"
            justify="space-around"
            alignItems="center"
            xs={12}
            className={classes.lightblueGrid}
            spacing={2}
            >
                <Grid item xs={12} sm={6}>
                    <Row5Image />
                </Grid>
                <Grid item xs={11} sm={5}>
                    <Row5Text />
                </Grid>
                <Grid item xs={1} sm={1} />
            </Grid>
        </Grid>
     </div>
    );
}
