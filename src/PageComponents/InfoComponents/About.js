import React, {useState, useEffect} from 'react'
import {Card, CardContent, Paper, Typography, AppBar, makeStyles } from "@material-ui/core";
import { positions, sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {Redirect, useLocation} from "react-router-dom";

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




export default function About(props) {


    return (
        <div  display={"flex"}  bgcolor = "#FF6F90" >


            <Typography variant={"h2"} color={"#C4C4C4"}>
                About
            </Typography>

            <Typography variant={"h6"}  color={"#c4c4c4"}>
                Synthetic Biology made easy:
            </Typography>
            <Typography variant={"p2"}  color={"#C4C4C4"}>
                What is SOAP Labs?
                Soap Labs is an iGEM project that makes automated
                DNA assembly more accessible.
            </Typography>
        </div>

    );
}
