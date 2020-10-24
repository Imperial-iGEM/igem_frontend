import React from 'react'
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";

export default function MethodChoice(props) {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Which DNA Assembly method would you like to use?</FormLabel>
            <RadioGroup aria-label="position" name="position" defaultValue={props.dnaAssembly}
                        onChange={props.handleDnaAssemblyChange}>
                <FormControlLabel
                    value="basic"
                    control={<Radio color="primary"/>}
                    label="BASIC"
                    labelPlacement="right"
                />
                <FormControlLabel
                    value="moclo"
                    control={<Radio color="primary"/>}
                    label="MoClo (Golden Gate)"
                    labelPlacement="right"
                />
                <FormControlLabel
                    value="bio_bricks"
                    control={<Radio color="primary"/>}
                    label="Bio Bricks"
                    labelPlacement="right"
                />
            </RadioGroup>
        </FormControl>
    )
}
