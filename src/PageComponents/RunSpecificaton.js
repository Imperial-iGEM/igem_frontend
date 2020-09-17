import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function RunSpecification(props){
    const classes = useStyles();

    return (
        <Typography variant="h2" component="h3">
            Run Specification
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField id="prefix-uri" label="Prefix URI" type="search" />
                            <TextField id="linker-upload" label="Linker Upload" type="search" />
                            <TextField id="backbone-upload" label="Backbone Upload" type="search" />
                            <TextField id="linker-selection" label="Linker Selection" type="search" />
                            <TextField id="no-plates-runs" label="Number of Plates/Runs" type="search" />
                            <TextField id="samples-per-plate" label="Number of Samples per Plate" type="search" />
                            <TextField id="reagent-concentrations" label="Reagent Concentrations" type="search" />
                        </div>
                    </form>
                </div>
        </Typography>
    )
}
