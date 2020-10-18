import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import React, {useState, useEffect} from 'react'
//
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
  }
});

export default function SpecCard_final(props) {
    const classes = useStyles();


    function linkGen(link){
        return ( <Typography variant="h5" component="h2">
                     Opentrons Output Files
                     <a>
                         {link}
                     </a>
                 </Typography>
       )
    }

    function Testnon0(props) {
        const links = props.links;
        console.log('links before length check',links)
        if (links.length == 0) {
          return <div>output links</div>;
        }
        return props.links.map(link => linkGen(link));
      }



    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Testnon0 links={props.links} />
            </CardContent>
        </Card>
    );
}
