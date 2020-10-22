import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },

    responsiveImage: {
        textAlign: 'center',

        [theme.breakpoints.up("xs")]:{
            maxHeight:"70px",

        },
        [theme.breakpoints.up("sm")]:{
            maxHeight:"210px"
        },
        [theme.breakpoints.up("md")]:{
            maxHeight:"280px",

        },
        [theme.breakpoints.up("lg")]:{
            maxHeight:"421px",

        }
  }}));

export default function Row4Image(props){

    const classes = useStyles();


    return(
        <div className={classes.responsiveImage}>
            <img src={process.env.PUBLIC_URL + 'pippette.jpeg'}  alt="robot" className={classes.responsiveImage} />
        </div>
    )
}