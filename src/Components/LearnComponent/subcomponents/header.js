import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'center',
    },
    textSection:{
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'10px',
    }
  }));

export default function LearnHeader(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Card variant='outlined'>
                <CardContent>
                <div className={classes.textSection}>
                    <Typography variant={"h2"}>
                        Learn
                    </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}