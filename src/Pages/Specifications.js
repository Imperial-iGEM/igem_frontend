import React, {useState, useEffect} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import LabHardware from "../PageComponents/DesignerComponents/LabHardware";
import Outputfiles from "../PageComponents/DesignerComponents/OutputFiles";
import RunSpecification from "../PageComponents/DesignerComponents/RunSpecificaton";
import {makeStyles} from "@material-ui/core/styles";
import SelectProtocol from "../PageComponents/DesignerComponents/SelectProtocol.js";
import StyledButton from "../PageComponents/StyledButton.js";

export default function Specifications(props) {
    const classes = useStyles();


    return (
        <div>
            <div className={classes.root}>
                <LabHardware/>
                <SelectProtocol />
            </div>
            <div>
                <StyledButton text="GENERATE SCRIPTS" />
            </div>
            <div>
                <Outputfiles/>
            </div>
            <div>
                <RunSpecification/>
            </div>

        </div>
    )
}



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 600,
        justifyContent: 'center',
        margin: 20
    }
}));
