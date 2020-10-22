import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    minWidth: '420px',
    height: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inputText: {
    minWidth: '50%'
  }
});

export default function SpecCardRun(props) {
  const classes = useStyles();

  const [error_input1,setError_input1] = React.useState(false)
  const [error_input2,setError_input2] = React.useState(false)

  const checkError1 = (event) => {
    if (event.target.value < 0) {
      setError_input1(true)
    } else {
      setError_input1(false)
    }
  }

  const checkError2 = (event) => {
    if (event.target.value < 0) {
      setError_input2(true)
    } else {
      setError_input2(false)
    }
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            Run Specification
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <CardActions>
                            <TextField
                              className={classes.inputText} 
                              onChange={(event) => {
                                props.maxNumWellPerPlateHandleChange(event)
                                checkError1(event)
                              }}
                              error={error_input1}
                              id="max_num_wells_per+plate"
                              label="Maximum number of wells filled per construct plate"
                              defaultValue="96"
                              type="number" />
                            <TextField
                              className={classes.inputText}
                              onChange={(event) => {
                                props.numRunPerPlateHandleChange(event)
                                checkError2(event)
                              }}
                              error={error_input2}
                              id="num_runs_per_plate"
                              label="Number of runs/number of construct plates"
                              defaultValue="1"
                              type="number" />
                        </CardActions>
                        <CardActions>
                          <FormGroup row>
                            <FormControlLabel
                              control={<Checkbox checked={props.stateRemoveRepeats.checkedA} onChange={props.handleChangeRemoveRepeates} name="checkedA" />}
                              label="Remove constructs with repeated parts"
                            />
                          </FormGroup>
                        </CardActions>
                    </form>
                </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
