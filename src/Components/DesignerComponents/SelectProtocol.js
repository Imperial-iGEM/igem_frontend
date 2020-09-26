import React, {useState} from 'react'
import {Paper, Typography} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    dropdown: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    card:{
        minWidth: 300,
        margin: theme.spacing(10),
    }
}))

export default function SelectProtocol({protocol}){

    const [selectedProtocol, setSelectedProtocol] = useState(protocol ?? '');

    const handleChangeProtocol = (event) => {
        setSelectedProtocol(event.target.value);
    };
    const classes = useStyles();

    return(
        <Paper elevation={3} className={classes.card}>
            <Typography variant="h2" component="h3">
                Select Protocol
            </Typography>
                <div className={classes.dropdown}>
                        <Select
                            labelId="protocol-select-label"
                            id="protocol-select"
                            value={selectedProtocol}
                            onChange={handleChangeProtocol}
                            className={classes.dropdown}
                        >
                            <MenuItem value="basic">BASIC</MenuItem>
                            <MenuItem value="moclo">CIDAR MoClo</MenuItem>
                            <MenuItem value="bio_brick_assembly">BIO BRICK ASSEMBLY</MenuItem>
                        </Select>
                </div>
        </Paper>
    )
}
