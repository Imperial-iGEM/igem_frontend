import React from 'react'
import {Button} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


export default function DoE(props){


    return(
        <Button size="large" variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon/>}>
            DoE
        </Button>
    )
}
