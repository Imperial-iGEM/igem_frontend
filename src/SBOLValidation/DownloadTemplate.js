import React, {useState} from 'react'
import {Button} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    myButton: {
      width: '100%',
      minHeight: '50px'
    },
    myGrid: {
        padding: '10px'
    }
  }));

export default function DownloadTemplate(props){

    const classes = useStyles();

    return(
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.myGrid}
        >
            <Grid item xs={12} sm={4} >
                <a href={process.env.PUBLIC_URL + 'SBOL/basic_validation.xml'} download style={{ textDecoration: 'none' }}>
                    <Button className={classes.myButton} variant="outlined" color="secondary">
                        Basic
                    </Button>
                </a>
            </Grid>
            <Grid item xs={12} sm={4}>
                <a href={process.env.PUBLIC_URL + 'SBOL/moclo_validation.xml'} download style={{ textDecoration: 'none' }}>
                    <Button className={classes.myButton} variant="outlined" color="secondary">
                        MoClo (Golden Gate)
                    </Button>
                </a>
            </Grid>
            <Grid item xs={12} sm={4}>
                <a href={process.env.PUBLIC_URL + 'SBOL/bb_validation_level1.xml'} download style={{ textDecoration: 'none' }}>
                    <Button className={classes.myButton} variant="outlined" color="secondary">
                        BioBricks
                    </Button>
                </a>
            </Grid>
        </Grid>
    )
}