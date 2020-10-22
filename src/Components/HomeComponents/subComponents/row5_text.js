import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'right',
        alignContent: 'center',
        alignItems: 'center'
    },
    textSection:{
        paddingTop: '12%',
        paddingRight: '25px',
        paddingLeft: '25px',
        alignItems: 'center',
    }
  }));

export default function Row5Text(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant={"h2"}>
                Who are we?
            </Typography>
            <Typography variant={"h6"}>
                SOAP Lab was born out of a need for more computational
                tools for synthetic biologists in a year where software
                tools have become indispensable and software teams in iGEM
                were for the first time able to win the Grand Prize.

                Our team is composed of bioengineers, biochemists, computer
                scientists and physicists studying at Imperial College London.
                Meet the whole team here!
            </Typography>
        </div>
    )
}