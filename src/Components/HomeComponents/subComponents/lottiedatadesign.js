import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import animationData from './lottiedatadesign/lf30_uq79sbpk.json';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100%',
    },
    responsiveImage: {
      textAlign: 'center',
      [theme.breakpoints.up("xs")]:{
        height:"200px",
        width:"364px"
      },
      [theme.breakpoints.up("sm")]:{
        height:"270px",
        width:"437px"
      },
      [theme.breakpoints.up("md")]:{
        height:"350px",
        width:"658px"
      },
      [theme.breakpoints.up("lg")]:{
        height:"432px",
        width:"786px"
    },
  }
}));

export default function ThisDesignAnimation() {

    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className={classes.root}>
        <Lottie 
          options={defaultOptions}
          //height={432}
         // width={786}
        />
      </div>
    );
  }