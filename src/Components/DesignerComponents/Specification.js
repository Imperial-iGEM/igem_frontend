import React, { useState } from 'react';
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
import gql, {useMutation} from "@apollo/client"
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

const LINKER_MUTATION = gql`
mutation($sbolFileString: String ){
  linkerList(sbolFileString:$sbolFileString) {
    linkerList
  }
}
`
const SPEC_MUTATION = gql`
mutation($specifications: SpecificationsType, $linkers: [LinkerInType]){
  finalSpec(specifications: $specifications, linkerTypes: $linkers) {
    outputLinks
  }
}`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExampleSpecification(props) {
  const classes = useStyles();

  //Controling modal when generate scipts button is pressed
  const [open, setOpen] = useState(false);

  //Run specification States
  const [prefixUri, setPrefixUri] = useState('');
  const [linkerUpload, setLinkerUpload] = useState('');
  const [backboneUpload, setBackboneUpload] = useState('');
  const [linkerSelection, setLinkerSelection] = useState('');
  const [noPlateRuns, setNoPlateRuns] = useState('');
  const [samplesPerPlate, setSamplesPerPlate] = useState('');
  const [reagentConcentrations, setReagentConcentrations] = useState('');

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
  const [
    linkerList,
    {loading: linkerListMutationLoading, error: linkerListMutationError},
  ] = useMutation(LINKER_MUTATION, {
    variables: {
      sbolFileString: btoa(window.sbolFile)
    }});


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
            "numberOfWells": samplesPerPlate,
            "numberOfRuns": noPlateRuns,
            "outputPlatePositions": outState.plate_position,
            "outputReagentsList": outState.reagents_list,
            "outputPartSequences": outState.part_sequences_to_order,
            "outputLogs": outState.debugging_logs,
            "outputMetaInformation": outState.run_metainformation
      },
       "linkerTypes":[]
    }});


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
    let linkers = await linkerList()
    console.log(linkers);
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
    console.log('prefixuri',prefixUri)
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
            prefixUrihandleChange={prefixUrihandleChange}
            linkerUploadhandleChange={linkerUploadhandleChange}
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
                <TheDataTable />
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
