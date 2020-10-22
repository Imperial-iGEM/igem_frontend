import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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


export default function EMAILText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h4"}>
                    Email
                </Typography>
                <Typography variant={"h6"}>For support or any questions:</Typography>
                <a href="mailto:imperialigem@gmail.com">Email: imperialigem@gmail.com</a>
            </div>
        </div>
    )
}