import React from 'react'
import {Grid } from "@material-ui/core";
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';

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


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    whiteGrid: {
      height: '850px',
      backgroundColor: "#FFFFFF",
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
    lottieDesignAnimation: {
        height: '100%',
        maxHeight: '550px'
    },
    lottieWinkAnimation: {
        height: '100%',
        float:'right',
    },
    generalSpacing: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    generalImage: {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(2),
    },
    responsiveImage: {
        [theme.breakpoints.up("xs")]:{
            height:"100",
        },
        [theme.breakpoints.up("sm")]:{
        height:"200",
            },
            [theme.breakpoints.up("md")]:{
    height:"300",
},

                [theme.breakpoints.up("md")]:{
    height:"400",
}

    }
  }));

export default function Home(props)  {

    const classes = useStyles();

    return (
      <div>
          <Grid className={classes.mainGrid} container>


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

            <Grid container xs={12} className={classes.pinkGrid}>
              <Grid item xs={6} className={classes.pinkGrid}>
                    <div className={classes.generalSpacing}>
                        <Row2Text />
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.pinkGrid}>
                    <div className={classes.generalSpacing}>
                        <div className={classes.lottieDesignAnimation}>
                            <ThisDesignAnimation />
                        </div>
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
                    <div className={classes.generalImage}>
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
