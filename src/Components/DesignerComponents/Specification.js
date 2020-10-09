import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import SpecCard from './SubComponents/SpecCard';
import SpecCard_run from './SubComponents/SpecCard_run';
import SpecCard_output from './SubComponents/SpecCard_output';
import SpecCard_labhardware from './SubComponents/SpecCard_labhardware';
import TheDataTable from './SubComponents/datatable'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import  {useMutation} from "@apollo/client"
import gql from "graphql-tag"

// Styling for components
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
  myDialog: {
    textAlign: 'center'
  },
  button: {
      height:'100%',
      width:'100%'
  }
}));

// example graphql linker mutation
const LINKER_MUTATION = gql`
mutation($sbolFileString: String ){
  linkerList(sbolFileString:$sbolFileString) {
    linkerList
  }
}`;

// example specification linker mutation
const SPEC_MUTATION = gql`
mutation($specifications: SpecificationsType, $linkers: [LinkerInType]){
  finalSpec(specifications: $specifications, linkerTypes: $linkers) {
    outputLinks
  }
}`;

// transition for modal to slide from bottom of the screen
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExampleSpecification(props) {
  // use styling diffined above
  const classes = useStyles();

  //set state for parts
  const [myItems, setMyItems] = useState('');
  //set state loading
  const [itemLoading, setItemLoading] = useState('');
  //Controling modal when generate scipts button is pressed
  const [open, setOpen] = useState(false);
  //Run specification States
  const [maxNumWellPerPlate, setMaxNumWellPerPlate] = useState('');
  const [numRunPerPlate, setNumRunPerPlate] = useState('');
  //Opentrons Labware states
  const [liquidHandler, setliquidHandler] = useState('opentronsOT2');
  const [pipette1, setPipette1] = useState('p20singlechannel');
  //Output Files States
  const [outState, setOutState] = useState({
    plate_position: true,
    reagents_list: true,
    part_sequences_to_order: true,
    run_metainformation: true,
    debugging_logs: true,
  });

  // Function called Linker used to make the graphql request
  const [
    linkerList,
    {loading: linkerListMutationLoading, error: linkerListMutationError},
  ] = useMutation(LINKER_MUTATION, {
    variables: {
      sbolFileString: btoa(window.sbolFile)
    }});

  // Function called finalSpec used to make graphql request
  const [
    finalSpec,
    {loading: finalSpecMutationLoading, error: finalSpecMutationError},
  ] = useMutation(SPEC_MUTATION, {
    variables:
        {
          "specifications":{
            "sbolString": btoa(window.sbolFile),
            "liquidHandler": liquidHandler,
            "removeRepeated": true,
            "outputPlatePositions": outState.plate_position,
            "outputReagentsList": outState.reagents_list,
            "outputPartSequences": outState.part_sequences_to_order,
            "outputLogs": outState.debugging_logs,
            "outputMetaInformation": outState.run_metainformation,
            "assemblyType": props.dnaAssembly
      },
       "linkerTypes":[]
    }});


  //Run Specification Update functions
  const maxNumWellPerPlateHandleChange = (event) => {
    setMaxNumWellPerPlate(event.target.value);
    console.log(maxNumWellPerPlate)
  };
  const numRunPerPlateHandleChange = (event) => {
    setNumRunPerPlate(event.target.value);
    console.log(numRunPerPlate)
  };
  
  //Opentrons Labware Update functions
  const handleChangeLiquid = (event) => {
    setliquidHandler(event.target.value);
  };

  //Opentrons Pipette Update fucntion
  const handleChangePipette = (event) => {
      setPipette1(event.target.value);
  };

  //Output files state changing functions
  const outputhandleChange = (event) => {
    setOutState({ ...outState, [event.target.name]: event.target.checked });
    console.log(outState)
  };


  //Functions for controlling modal
  const handleClickOpen = async () => {
    // send sbol file for linkers
    console.log(btoa(window.sbolFile))
    let linkers = await linkerList()
    setMyItems(linkers.data.linkerList.linkerList)
    setItemLoading(linkers.loading);
    setTimeout(() => {  setItemLoading(linkers.loading); }, 2000);
    setOpen(true);
    Generate();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseGenerate = async () => {
    // Send information
    let outputLinks = await finalSpec()
    setOpen(false);
  }


  const Generate = () =>{
    console.log('labware attached',pipette1)
    console.log('liquid handler',liquidHandler)
    console.log('selected dna assembly method', props.dnaAssembly)
  }


  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={4}>
          <SpecCard />
        </Grid>
        <Grid item xs={8}>
          <SpecCard_run
            maxNumWellPerPlateHandleChange={maxNumWellPerPlateHandleChange}
            numRunPerPlateHandleChange={numRunPerPlateHandleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <SpecCard_output
            outState={outState}
            outputhandleChange={outputhandleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <SpecCard_labhardware
            pipette1={pipette1}
            liquidHandler={liquidHandler}
            handleChangeLiquid={handleChangeLiquid}
            handleChangePipette={handleChangePipette}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={
              handleClickOpen
            }
          >
            Process Input
          </Button>
          <Dialog
            maxWidth={"md"}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Fill in the concentrations of each part or accept default value"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Please fill the concentrations of each Part / Linker ypu have and also the plate number and well in which you desire to place each Part / Linker that you have
                <TheDataTable partsList={myItems} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="primary">
                Close
              </Button>
              <Button onClick={handleCloseGenerate} variant="contained" color="secondary">
                Generate Opentrons Scripts
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
}
