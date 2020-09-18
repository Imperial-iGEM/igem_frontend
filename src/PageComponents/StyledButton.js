import React, {useState} from 'react'
import {Paper, Typography} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";




export default function StyledButton(props){

    const CreateStyledButton = withStyles({
        root: {
            background: '#FF6F90',
            color: '#FFFFFF',
            height: 70,
            width: 380,
            radius: 10,
        }
    })(Button);

    return(
        <CreateStyledButton>{props.text}</CreateStyledButton>
    )
}
