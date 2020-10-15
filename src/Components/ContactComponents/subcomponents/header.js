import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardContent, Container } from '@material-ui/core';
import { ClassRounded } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

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

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function ContactHeader(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Card variant='outlined'>
                <CardContent>
                <div className={classes.textSection}>
                    <Typography variant={"h2"}>
                        Contact
                    </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}