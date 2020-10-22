import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import React from 'react'
//
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from "@material-ui/core";
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

export default function SpecCardOutput(props) {
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
                    Output Files
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Select which output files you would like generated</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                control={<Switch checked={props.outState.plate_position} onChange={props.outputhandleChange} name="plate_position" />}
                                label="Plate Position"
                                />
                                <FormControlLabel
                                control={<Switch checked={props.outState.reagents_list} onChange={props.outputhandleChange} name="reagents_list" />}
                                label="Reagents List"
                                />
                                <FormControlLabel
                                control={<Switch checked={props.outState.part_sequences_to_order} onChange={props.outputhandleChange} name="part_sequences_to_order" />}
                                label="Part Sequences to Order"
                                />
                                <FormControlLabel
                                control={<Switch checked={props.outState.run_metainformation} onChange={props.outputhandleChange} name="run_metainformation" />}
                                label="Run Metainformation"
                                />
                                <FormControlLabel
                                control={<Switch checked={props.outState.debugging_logs} onChange={props.outputhandleChange} name="debugging_logs" />}
                                label="Debugging Logs"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                </Typography>
        </CardContent>
        </Card>
    );
}
