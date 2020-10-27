import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FileUploadPage from "./FileUploadPage";
import ExampleSpecification from '../Components/DesignerComponents/Specification'
import SBOLDesigner from '../Components/DesignerComponents/SBOLDesigner';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  centerButtons: {
    textAlign: 'center',
  }
}));

function getSteps() {
  return ['SBOL Designer', 'SBOL File Upload', 'Specifications'];
}

function getStepContent(stepIndex,handleDnaAssemblyChange,dnaAssembly) {
  switch (stepIndex) {
    case 0:
      return <SBOLDesigner handleDnaAssemblyChange={handleDnaAssemblyChange} dnaAssembly={dnaAssembly}/>;
    case 1:
      return <FileUploadPage
                handleDnaAssemblyChange={handleDnaAssemblyChange} dnaAssembly={dnaAssembly}
              />;
    case 2:
      return <ExampleSpecification
                dnaAssembly={dnaAssembly}
              />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function ParentDesigner() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [dialogOpen, setDialogOpen] = useState(false);
  // Storing DNA assembly selection
  const [dnaAssembly, setDnaAssembly] = useState('basic');

  // Storing change function for DNA assembly selection
  function handleDnaAssemblyChange (event) {
    setDnaAssembly(event.target.value);
  };

  const handleNextDesigner = () => {
    setDialogOpen(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNext = () => {
    if(activeStep === 0){
      setDialogOpen(true);
      return;
    }
    setDialogOpen(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCancel = () => {
    setDialogOpen(false);
  }

  return (
    <div className={classes.root}>
      <div><Dialog
          open={dialogOpen}
          onClose={handleCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Warning!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ensure you have saved and downloaded your SBOL file (if any) from the Designer before continuing. Changes made may be lost otherwise.
            You can save and download your file using the 6th button from the left in the Designer. Please refer to the tutorial for more details.
            <br/>
            <br/>
            Also ensure you have selected the correct assembly method at the top of this page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleNextDesigner} color="primary" autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog></div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div style={{marginBottom: 10}}>
          <div >
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleDnaAssemblyChange,dnaAssembly)}</Typography>
            </div>
            <div style={{marginTop: 10}}>
              <div className={classes.centerButtons}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
                {/*{activeStep === 0 &&*/}
                {/*<Button style={{marginLeft: 10}} variant="contained" color="primary" onClick={handleNext}>*/}
                {/*  Skip*/}
                {/*</Button>}*/}
            </div>
          </div>
            </div>
        )}
      </div>
    </div>
  );
}
