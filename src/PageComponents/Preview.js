import React, {useState, useEffect} from 'react'
import {Paper, Typography} from "@material-ui/core";


export default function Preview(props){


    return(
        <Paper elevation={3}>
            <Typography variant="h1" component="h2">
                Preview
            </Typography>
        </Paper>
    )
}
