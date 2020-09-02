import React, {useState, useEffect} from 'react'
import {Card, CardContent, Paper, Typography} from "@material-ui/core";
import { spacing } from '@material-ui/system';


export default function SBOLValidationComponent(props) {


    return (
        <div>
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2" style = {{padding:20}} id={"errorBox"} >
                    Errors
                </Typography>

                <Typography variant="h6" component="h2" style = {{padding:20}}  id={"outPutFile"}>
                    OutputFile
                </Typography>



            </CardContent>
        </Card>
            </div>
    )
}
