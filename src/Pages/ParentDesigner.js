import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FileUploadPage from "./FileUploadPage";
import ExampleSpecification from '../Components/DesignerComponents/Specification'
import FileUpload from '../SBOLValidation/FileUpload';
import SBOLDesigner from '../Components/DesignerComponents/SBOLDesigner';

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
  return ['SBOL File Upload', 'SBOL Designer', 'Specifications'];
}

function getStepContent(stepIndex,handleDnaAssemblyChange,dnaAssembly) {
  switch (stepIndex) {
    case 0:
      return <FileUploadPage
                handleDnaAssemblyChange={handleDnaAssemblyChange}
              />;
    case 1:
      return <SBOLDesigner />;
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
  const [activeStep, setActiveStep] = useState(2);
  const steps = getSteps();

  // Storing DNA assembly selection
  const [dnaAssembly, setDnaAssembly] = useState('basic');

  // Storing change function for DNA assembly selection
  const handleDnaAssemblyChange = (event) => {
    setDnaAssembly(event.target.value);
    console.log(event.target.value);
  };

  const handleNext = () => {
    if(activeStep === 1){
      window.runGet().then(
      (result) => {
        if (result.error){
          alert("Error getting sbol file from app")
        } else {
          window.sbolFile = result;
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      }
    ).catch((error) => {
      console.log(error);
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
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
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleDnaAssemblyChange,dnaAssembly)}</Typography>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
