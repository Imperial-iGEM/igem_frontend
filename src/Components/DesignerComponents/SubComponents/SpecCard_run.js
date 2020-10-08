import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
    minWidth: '400px'
  }
});

export default function SpecCard_run(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const [error_input1,setError_input1] = React.useState(false)
  const [error_input2,setError_input2] = React.useState(false)
  

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

  //function checkNegetive(event) {
  //  if (event.target.value < 0) {
  //    this.setState({ errorText: '' })
  //  } else {
  //    this.setState({ errorText: 'Invalid format: ###-###-####' })
  //  }
  //}

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
                                props.prefixUrihandleChange(event)
                                checkError1(event)
                              }}
                              error={error_input1}
                              id="prefix-uri"
                              label="Maximum number of wells filled per construct plate"
                              type="number" />
                            <TextField
                              className={classes.inputText}
                              onChange={(event) => {
                                props.linkerUploadhandleChange(event)
                                checkError2(event)
                              }}
                              id="linker-upload"
                              label="Number of runs/number of construct plates"
                              type="number" />
                        </CardActions>
                        <CardActions>
                          <FormGroup row>
                            <FormControlLabel
                              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
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
