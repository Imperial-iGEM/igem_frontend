import React, {useState, useEffect} from 'react'
import {Button, Paper, Typography} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


export default function ProtocolSelect(props) {


    return (
        <Button size="large" variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon/>}>
            Protocol Select
        </Button>
    )
}
