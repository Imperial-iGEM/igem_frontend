import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import SpecCard from './SubComponents/SpecCard';
import SpecCard_run from './SubComponents/SpecCard_run';
import SpecCard_output from './SubComponents/SpecCard_output';
import SpecCard_labhardware from './SubComponents/SpecCard_labhardware';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft:40,
    paddingRight:40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
      height:'100%',
      width:'100%'
  }
}));

export default function ExampleSpecification() {
  const classes = useStyles();

  //Run specification States
  const [prefixUri, setPrefixUri] = useState('');
  const [linkerUpload, setLinkerUpload] = useState('');
  const [backboneUpload, setBackboneUpload] = useState('');
  const [linkerSelection, setLinkerSelection] = useState('');
  const [noPlateRuns, setNoPlateRuns] = useState('');
  const [samplesPerPlate, setSamplesPerPlate] = useState('');
  const [reagentConcentrations, setReagentConcentrations] = useState('');

  //Opentrons Labware states
  const [liquidHandler, setliquidHandler] = useState('P20');
  const [labware1, setlabware1] = useState('P20');
  
  //Run Specification Update functions
  const prefixUrihandleChange = (event) => {
    setPrefixUri(event.target.value);
    console.log(prefixUri)
  };
  const linkerUploadhandleChange = (event) => {
    setLinkerUpload(event.target.value);
    console.log(linkerUpload)
  };
  const backboneUploadhandleChange = (event) => {
    setBackboneUpload(event.target.value);
    console.log(backboneUpload)
  };
  const linkerSelectionhandleChange = (event) => {
    setLinkerSelection(event.target.value);
    console.log(linkerSelection)
  };
  const noPlateRunshandleChange = (event) => {
    setNoPlateRuns(event.target.value);
    console.log(noPlateRuns)
  };
  const samplesPerPlatehandleChange = (event) => {
    setSamplesPerPlate(event.target.value);
    console.log(samplesPerPlate)
  };
  const reagentConcentrationshandleChange = (event) => {
    setReagentConcentrations(event.target.value);
    console.log(reagentConcentrations)
  };

  //Opentrons Labware Updatefunctions
  const handleChangeLiquid = (event) => {
    setliquidHandler(event.target.value);
  };

  const handleChangeLab = (event) => {
      setlabware1(event.target.value);
  };
  
  function Generate() {
    console.log('labware attached',labware1)
    console.log('liquid handler',liquidHandler)
  }

  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={4}>
          <SpecCard />
        </Grid>
        <Grid item xs={8}>
          <SpecCard_run
            prefixUrihandleChange={prefixUrihandleChange}
            linkerUploadhandleChange={linkerUploadhandleChange}
            backboneUploadhandleChange={backboneUploadhandleChange}
            linkerSelectionhandleChange={linkerSelectionhandleChange}
            noPlateRunshandleChange={noPlateRunshandleChange}
            samplesPerPlatehandleChange={samplesPerPlatehandleChange}
            reagentConcentrationshandleChange={reagentConcentrationshandleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <SpecCard_output />
        </Grid>
        <Grid item xs={5}>
          <SpecCard_labhardware 
            labware1={labware1}
            liquidHandler={liquidHandler}
            handleChangeLiquid={handleChangeLiquid}
            handleChangeLab={handleChangeLab}

          />
        </Grid>
        <Grid item xs={3}>
            <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={Generate}
            >
            Generate Opentrons Scripts
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}