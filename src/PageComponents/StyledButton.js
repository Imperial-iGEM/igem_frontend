import React, {useState} from 'react'
import {Button} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";




export default function StyledButton(props){

    const CreateStyledButton = withStyles({
        root: {
            background: '#FF6F90',
            color: '#FFFFFF',
            height: 70,
            width: 380,
            bordeRadius: 30,
        }
    })(Button);

    return(
        <CreateStyledButton>{props.text}</CreateStyledButton>
    )
}
