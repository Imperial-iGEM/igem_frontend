import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    imagePosition:{
        paddingLeft: '2%',
        paddingTop: '3%',
    },

    responsiveImage: {
        textAlign: 'center',
        paddingTop: '3%',

        [theme.breakpoints.up("xs")]:{
            maxHeight:"80px",

        },
        [theme.breakpoints.up("sm")]:{
            maxHeight:"151px"
        },
        [theme.breakpoints.up("md")]:{
            maxHeight:"241px",
        },
        [theme.breakpoints.up("lg")]:{
            height:"322px",
        }
    }
  }));

export default function Row5Image(props){

    const classes = useStyles();


    return(
        <div className={classes.responsiveImage}>
            <img src={process.env.PUBLIC_URL + 'teamCropped.png'} className={classes.responsiveImage} alt="robot"/>
        </div>
    )
}