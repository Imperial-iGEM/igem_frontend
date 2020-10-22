import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
        alignContent: 'center',
        alignItems: 'center'
    }
  }));

export default function Row4Text(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <WhiteTextTypography variant={"h4"}>
                Automation Made Accessible
            </WhiteTextTypography>
            <WhiteTextTypography variant={"h6"}>
                Liquid handlers were once a commodity of
                highly-capital biotech, but with Opentrons paving the way
                for affordable, open-source labware, the average lab in the
                UK can now afford to purchase such equipment.
            </WhiteTextTypography>
            <WhiteTextTypography variant={"h6"}>
                The same cannot yet be said for supporting biologist-friendly
                software tools, meaning bench scientists have to code their
                own scripts for each new protocol. SOAP Lab tries to bridge
                the gap by letting synthetic biologists
                generate their assembly protocols automatically and reproducibly.
            </WhiteTextTypography>
        </div>
    )
}