import React from "react";
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

axios.defaults.headers.post['Content-Type'] = 'application/json';
export default function SBOLValidatorInput(props) {

    const [state, setState] = React.useState({
        non_compliant_URI: true,
        incomplete_documents: false,
        check_best_practices: true,
        fail_first_error: true,
        display_full_stack_trace: false,
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
                    <FormLabel component="legend">Validation Options</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={state.non_compliant_URI} onChange={handleChange} name="non_compliant_URI" />}
                            label="Allow Non Compliant URI"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.incomplete_documents} onChange={handleChange} name="incomplete_documents" />}
                            label="Allow incomplete documents"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.check_best_practices} onChange={handleChange} name="check_best_practices" />}
                            label="Check best practices"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.fail_first_error} onChange={handleChange} name="fail_first_error" />}
                            label="Fail on first error"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.display_full_stack_trace} onChange={handleChange} name="display_full_stack_trace" />}
                            label="Display full stack trace"
                        />
                    </FormGroup>
                </FormControl>
                {console.log("Non Compliant URI",state.non_compliant_URI)}
            </div>
        </Typography>
    </Paper>




)


}