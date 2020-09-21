import React, {useState} from 'react';
import {AppBar} from "@material-ui/core";

export default function TutorialPageFileUpload(props){

    const imageClick = () => {
        console.log('Click');
    }
//<img src={(Helper)} onClick={() => imageClick()} height={100} width={100}           />
    return(
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <img src={process.env.PUBLIC_URL + 'FileUploadTutorial.png'} title="Upload after validating" alt="help robot"/>

</div>

    )
}
