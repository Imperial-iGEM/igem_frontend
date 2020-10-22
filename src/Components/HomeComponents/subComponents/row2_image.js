import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    imagePosition:{
        textAlign: 'center',
    }
    ,

    responsiveImage: {
        textAlign: 'center',

        [theme.breakpoints.up("xs")]:{
            height:"100px",
            maxHeight:"100px",

        },
        [theme.breakpoints.up("sm")]:{
            height:"250px",
            maxHeight:"250px"
        },
        [theme.breakpoints.up("md")]:{
            height:"300px",
            maxHeight:"300px",

        },}
  }));

export default function Row2Image(props){

    const classes = useStyles();


    return(
        <div className={classes.responsiveImage}>
            <img src={process.env.PUBLIC_URL + 'designcycletransparent.png'} className={classes.responsiveImage} alt="robot"/>
        </div>
    )
}