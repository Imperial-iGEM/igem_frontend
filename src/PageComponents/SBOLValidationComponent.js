import React, {useState, useEffect} from 'react'
import {Card, CardContent, Paper, Typography} from "@material-ui/core";
import { spacing } from '@material-ui/system';
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
export default function SBOLValidationComponent(props) {


    return (
        <div >
        <Card spacing={2}>
            <CardContent>
                <Typography variant="h6" component="h2" style = {{padding:20}} id={"errorBox"} >
                    Errors
                </Typography>

                <Typography variant="h6" component="h2" style = {{padding:20}}  id={"outPutFile"}>
                    OutputFile
                </Typography>



            </CardContent>
        </Card>
            <Grid
                container
                direction="column-reverse"
                justify="center"
                alignItems="center"
            >

                <Button variant="contained" color="primary" centerRipple={3}>
                 Info
            </Button>
            </Grid>
            </div>
    )
}
