import React, {useState, useEffect} from 'react'
import {Paper, Typography} from "@material-ui/core";
import SBOLAPIClass from './SBOLAPIClass'
import MenuDraw from "../MenuDraw";
import ConstructViewer from "../ConstructViewer";
export default function SBOLAPI(props){



    return(
        <div>
            <SBOLAPIClass/>
        </div>
    )

}