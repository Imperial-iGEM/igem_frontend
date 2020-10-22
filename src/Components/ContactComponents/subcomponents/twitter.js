import React from 'react'
import { makeStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'center',
        padding: '30px',
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


export default function TWITTERText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h4"}>
                    Twitter
                </Typography>
                <Typography variant={"h6"}>To Keep updated with our latest activities:</Typography>
                <a href={"https://twitter.com/IGem2020"}>  https://twitter.com/IGem2020</a>
            </div>
        </div>
    )
}