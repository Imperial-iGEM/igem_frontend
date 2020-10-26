import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
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


export default function OpentronsText(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography variant={"h6"}>
                    Opentrons Robots were greatly useful to our project as a extremly cheap liquid handler compared to others on the market with a very self explanatory API. We found the API very easy to use and well documents and could use the liquid handlers proficiently and quickly.
                </Typography>
                <Typography variant={"h6"}>
                    Currently the only liquid handler supported by our software is the OT2 liquid handler shown in the image to the left. To learn more about opentrons offerings visit their website below.
                </Typography>
            </div>
        </div>
    )
}