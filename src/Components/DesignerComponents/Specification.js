import React from 'react';
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

  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={4}>
          <SpecCard />
        </Grid>
        <Grid item xs={8}>
          <SpecCard_run />
        </Grid>
        <Grid item xs={4}>
          <SpecCard_output />
        </Grid>
        <Grid item xs={5}>
          <SpecCard_labhardware />
        </Grid>
        <Grid item xs={3}>
            <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<SaveIcon />}
            >
            Generate Opentrons Scripts
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}