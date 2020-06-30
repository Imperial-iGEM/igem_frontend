import React, {useState, useEffect} from 'react'
import {Paper,Button, Icon, Typography} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default function Generate(props){


    return(
            <Button size="large" variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon/>}>
                Generate
            </Button>
    )
}
