import React, {useState, useEffect} from 'react'
import {Card, CardContent, Paper, Typography, AppBar, makeStyles } from "@material-ui/core";
import { positions, sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },
    help:{
        component: "h1"
    }
}));

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "1000px",
    color: "#111111"
};

export default function FirstHome(props) {
    const classes = useStyles();


    return (
        <div  >

            <Box display="flex" p={1} bgcolor="background.paper">

                <Box
                    bgcolor = "#FF6F90"

                    color="#FFFFFF"
                    p={2}
                    position="absolute"
                    top="50%"
                    left="30%"

                >
                    Get Started!
                </Box>


                <Box
                    color="grey.700"
                    p={1}
                    position="absolute"
                    top="35%"
                    left="15%"
                    style={{styles}} >
                    <Typography variant={"h2"}>
                        AutoMate
                    </Typography>
                </Box>
                <Box
                    p={1}
                    position="absolute"
                    top="35%"
                    left="60%"
                    zIndex="tooltip"
                >
                    <img src={process.env.PUBLIC_URL + 'Helper2.svg'} height="90%" width="90%" />
                </Box>
            </Box>
        </div>

    );
}
