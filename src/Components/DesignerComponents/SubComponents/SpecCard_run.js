import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 420,
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
});

export default function SpecCard_run() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            Run Specification
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <CardActions>
                            <TextField id="prefix-uri" label="Prefix URI" type="search" />
                            <TextField id="linker-upload" label="Linker Upload" type="search" />
                            <TextField id="backbone-upload" label="Backbone Upload" type="search" />
                            <TextField id="linker-selection" label="Linker Selection" type="search" />
                        </CardActions>
                        <CardActions>
                            <TextField id="no-plates-runs" label="Num Plates/Runs" type="search" />
                            <TextField id="samples-per-plate" label="Num Samples/plate" type="search" />
                            <TextField id="reagent-concentrations" label="Concentrations" type="search" />
                        </CardActions>
                    </form>
                </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
