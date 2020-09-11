import React, {useState, useEffect} from 'react'
import {Paper, Typography} from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

export default function OutputFiles(props){
    const [state, setState] = React.useState({
        plate_position: true,
        reagents_list: false,
        part_sequences_to_order: true,
        run_metainformation: true,
        debugging_logs: false,
      });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    return(
        <Paper elevation={3}>
            <Typography variant="h2" component="h3">
                Output Files
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Select which output files you would like generted</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                            control={<Switch checked={state.plate_position} onChange={handleChange} name="plate_position" />}
                            label="Plate Position"
                            />
                            <FormControlLabel
                            control={<Switch checked={state.reagents_list} onChange={handleChange} name="reagents_list" />}
                            label="Reagents List"
                            />
                            <FormControlLabel
                            control={<Switch checked={state.part_sequences_to_order} onChange={handleChange} name="part_sequences_to_order" />}
                            label="Part Sequences to Order"
                            />
                            <FormControlLabel
                            control={<Switch checked={state.run_metainformation} onChange={handleChange} name="run_metainformation" />}
                            label="Run Metainformation"
                            />
                            <FormControlLabel
                            control={<Switch checked={state.debugging_logs} onChange={handleChange} name="debugging_logs" />}
                            label="Debugging Logs"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
            </Typography>
        </Paper>
    )
}
