import React, {useState, useEffect} from 'react'
import {Paper, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 420,
        height: '100%',
      },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function SpecCard_labhardware() {

    const classes = useStyles();
    const [liquidHandler, setliquidHandler] = React.useState('');
    const [labware1, setlabware1] = React.useState('');
  
    const handleChangeLiquid = (event) => {
        setliquidHandler(event.target.value);
    };

    const handleChangeLab = (event) => {
        setlabware1(event.target.value);
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={liquidHandler}
            onChange={handleChangeLiquid}
            >
            <MenuItem value={10}>P20</MenuItem>
            <MenuItem value={20}>P40</MenuItem>
            <MenuItem value={30}>P80</MenuItem>
            </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Labware</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={labware1}
            onChange={handleChangeLab}
            >
            <MenuItem value={10}>P20</MenuItem>
            <MenuItem value={20}>P40</MenuItem>
            <MenuItem value={30}>P80</MenuItem>
            </Select>
            </FormControl>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
