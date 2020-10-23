import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
        textAlign: 'right',
        [theme.breakpoints.only("xs")]:{
            paddingTop: '30px',
            textAlign: 'center',
        },
    }
})(Typography);

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'right',
        [theme.breakpoints.up("xs")]:{
            paddingBottom: '30px',
        },
    },
    myButton: {
        padding: '10px',
        [theme.breakpoints.only("xs")]:{
            padding: '0px',
            paddingTop: '10px',
            textAlign: 'center',
        },
    }
  }));

export default function Row3Text(props){

    const classes = useStyles();

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        background: ''
    };

    return(
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <WhiteTextTypography variant={"h3"}>
                    Connecting Design & Build
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"}>
                    With progress in synthetic biology increasing rapidly,
                    academic labs need to be able to scale their experiments
                    easily to optimise their strains and yield, which means
                    building lots of constructs. Generating lab instructions based
                    on a genetic design therefore
                    presents a powerful way to automatically scale up protocols.
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"}>
                    Resorces: Combinatorial Design/SBOL
                </WhiteTextTypography>
                <div className={classes.myButton}>
                    <Link style={navStyle} to='/learn'>
                        <Button size="medium" color="secondary" variant="contained">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </ThemeProvider>
        </div>
    )
}