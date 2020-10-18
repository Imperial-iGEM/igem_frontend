import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import React, {useState, useEffect} from 'react'
//
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
  }
});

export default function SpecCard_final(props) {
    const classes = useStyles();

    //const [state, setState] = React.useState({
    //    plate_position: true,
    //    reagents_list: false,
    //    part_sequences_to_order: true,
    //    run_metainformation: true,
    //    debugging_logs: false,
    //});

    //const handleChange = (event) => {
    //    setState({ ...state, [event.target.name]: event.target.checked });
    //};

    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
        <Typography variant="h5" component="h2">
                    Opentrons Output Files
                    <div>
                        {props.links}
                    </div>
                </Typography>
        </CardContent>
        </Card>
    );
}
