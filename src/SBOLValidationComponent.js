import React, {useState, useEffect} from 'react'
import {Card, CardContent, Paper, Typography} from "@material-ui/core";
import { spacing } from '@material-ui/system';
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

export default function SBOLValidationComponent(props) {


    return (
        <div >
            <Paper style={{padding:20, marginTop:10, marginBottom:10}} >
                <Typography variant="h6"  style = {{padding:20}} id={"errorBox"} >
                    Errors
                </Typography>
            </Paper>

            <Paper style={{padding:20, marginTop:10, marginBottom:10}}>

                <Typography variant="h6"  style = {{padding:20}}  id={"outPutFile"}>
                    OutputFile
                </Typography>
            </Paper>

        </div>
    )
}
