import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    imagePosition:{
        textAlign: 'center',
        paddingTop: '7%',
    },

    responsiveImage: {
        textAlign: 'center',
        paddingTop: '7%',

        [theme.breakpoints.up("xs")]:{
            height:"100px",
            maxHeight:"100px",

        },
        [theme.breakpoints.up("sm")]:{
            height:"300px",
            maxHeight:"300px"
        },
        [theme.breakpoints.up("md")]:{
            height:"400px",
            maxHeight:"400px",

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