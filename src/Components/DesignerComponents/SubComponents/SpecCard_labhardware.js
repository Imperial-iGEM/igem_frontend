import React from 'react'
import { Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 420,
        height: '100%',
      },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '90%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function SpecCardLabhardware(props) {

  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h5" component="h2">
          Opentrons Hardware
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Liquid Handler</InputLabel>
              <Select
                labelId="liquid-handler-label"
                id="liquid-handler"
                value={props.liquidHandler}
                onChange={props.handleChangeLiquid}
                >
                <MenuItem value={'opentronsOT2'}>Opentrons OT-2</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Pippete</InputLabel>
              <Select
                labelId="pipette-label"
                id="pipette"
                value={props.pipette1}
                onChange={props.handleChangePipette}
                >
                <MenuItem value={'p20singlechannel'}>P20 SINGLE-CHANNEL GEN2</MenuItem>
                <MenuItem value={'P208channel'}>P20 8-CHANNEL GEN2</MenuItem>
                <MenuItem value={'P300singlechannel'}>P300 SINGLE-CHANNEL GEN2</MenuItem>
                <MenuItem value={'P3008channel'}>P300 8-CHANNEL GEN2</MenuItem>
                <MenuItem value={'P1000singlechannel'}>P1000 SINGLE-CHANNEL GEN2</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Opentrons Thermocycler Module"
                  />
                </FormGroup>
            </FormControl>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
