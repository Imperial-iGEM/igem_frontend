import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
        textAlign: 'left',
        [theme.breakpoints.only("xs")]:{
            paddingTop: '30px',
            textAlign: 'center',
        },
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
        alignContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up("xs")]:{
            paddingTop: '30px',
            paddingBottom: '30px',
        },
    }
  }));

export default function Row4Text(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </div>
    )
}