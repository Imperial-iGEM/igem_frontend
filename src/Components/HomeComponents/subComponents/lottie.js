import React from 'react'
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import animationData from './lottiedata/lf30_5egnodig.json'

const useStyles = makeStyles((theme) => ({
  root:{
      height: '100%',
      [theme.breakpoints.up("xs")]:{
        paddingTop:'30px'
      },
  },
}
));

export default function ThisAnimation() {

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