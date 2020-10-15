import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    textSection:{
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'10px',
    }
  }));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function SBOLText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h6"}>
                    SBOL (Synthetic Biology Open Language) is a fledgling standard data format for expressing genetic circuits in synthetic biology and increasing the shareability of designs. The adoption of SBOL symbolic visual ontology is already sweeping through academic journal ranks, while the digital ontology and the accompanying SBOL programming frameworks (pySBOL and libSBOLj) are slowly following behind. With the creation of more software tools that integrate and support SBOL, we hope to 
                </Typography>
            </div>
        </div>
    )
}