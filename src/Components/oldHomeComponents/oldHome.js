import React from 'react'
import {Grid,Typography,  makeStyles,withStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { white } from '@material-ui/core/colors';


const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const ColorButton = withStyles((theme) => ({
    root: {
      color: "#FFFFFF",
      backgroundColor: "#FF6F90",
      '&:hover': {
        backgroundColor: "#FF6F90",
      },
    },
  }))(Button);

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },
    paper:{
        padding: 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    boxman:{
        textAlign: 'left',
        height: '674px',
    },
    Container:{
        height:'100%'
    },
    Title:{
        textAlign: 'left',
    },
    Helper:{
        position: 'absolute',
        top: '62px',
        left: '61%',
    }
}));






export default function FirstHome(props) {
    const classes = useStyles();

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        background: ''
    };



   // <Box display="flex" p={1} bgcolor="background.paper">
//                     <img src={process.env.PUBLIC_URL + 'Helper2.svg'} height="90%" width="90%" />
    return (
        <div className={classes.Container}>
            <Box>
                <Box
                bgcolor={"#FFFFFF"}
                className={classes.boxman}
                flexGrow={1}
                minHeight={"100%"}
                >
                    <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} style={{ padding: 250 , paddingLeft:80, paddingRight:0}} flexGrow={1} height={"20%"}>
                        <Grid container sm={6} className={classes.Title}    justify="center" p={3}>
                            <Grid item sm={12}></Grid>
                            <Grid item sm={12}></Grid>
                            <Grid item sm={12}></Grid>
                            <Grid item sm={12}></Grid>
                            <Grid item sm={6}>
                                <Box>
                                    <Typography variant={"h4"} className={classes.Title}>
                                        Welcome to
                                    </Typography>
                                    <Typography variant={"h1"} className={classes.Title}>
                                        SOAPLab
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={6}></Grid>
                            <Grid item sm={4}>
                                <Link style={navStyle} to='/designer'>
                                    <ColorButton size="large" variant="contained">
                                        Designer
                                    </ColorButton>
                                </Link>
                            </Grid>
                            <Grid item sm={8}></Grid>
                        </Grid>
                        <Grid item sm={6}>
                            <Box>
                                <div className={classes.Helper}>
                                    <img src={process.env.PUBLIC_URL + 'Helper2.svg'} height='1000' alt="robot"/>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                bgcolor={"#FF6F90"}
                p={6}
                className={classes.boxman}
                flexGrow={1}
                minHeight={"20%"}
                >
                    <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"}>
                        <Grid item sm={6}>
                            <WhiteTextTypography variant={"h2"} color="white">
                                Synthetic Biology made easy
                            </WhiteTextTypography>
                            <WhiteTextTypography variant={"h6"} color="#FFFFFF">
                                You're in the lab, you've figured out your genetic circuits,
                                now you have to build them. Instead of  spending another day
                                planning and carrying out repetitive assembly protocols by
                                hand, SOAP Lab helps you to automate the process.
                            </WhiteTextTypography>
                            <WhiteTextTypography variant={"h8"}>
                                Read More
                            </WhiteTextTypography>
                        </Grid>
                        <Grid item sm={6} >
                            <img src={process.env.PUBLIC_URL +'svg/designcycle.svg'} height='400px' alt="robot"/>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                bgcolor={"#324460"}
                p={6}
                className={classes.boxman}
                flexGrow={1}
                minHeight={"20%"}
                >
                    <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
                        <Grid item container sm={6}>
                            <Grid item sm={12}></Grid>
                            <WhiteTextTypography variant={"h2"} color="grey.700">
                                Why?
                            </WhiteTextTypography>
                            <img src={process.env.PUBLIC_URL +'Images/Why.png'} height="40%" width="85%"  alt="robot"/>
                        </Grid>
                        <Grid item sm={6} >
                            <WhiteTextTypography variant={"h2"}>
                                Design-Build
                            </WhiteTextTypography>
                            <WhiteTextTypography variant={"h6"}>
                                With progress in synthetic biology increasing rapidly,
                                academic labs need to be able to scale their experiments
                                easily to optimise their strains and yield, which means
                                building lots of constructs. Generating lab instructions based
                                on a genetic design therefore
                                presents a powerful way to automatically scale up protocols.</WhiteTextTypography>
                            <WhiteTextTypography variant={"h6"}>
                                Resorces: Combinatorial Design/SBOL
                            </WhiteTextTypography>
                            <WhiteTextTypography variant={"h8"}>
                                About
                            </WhiteTextTypography>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                bgcolor={"#859FE1"}
                p={6}
                className={classes.boxman}
                flexGrow={1}
                minHeight={"20%"}
                >
                    <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
                        <Grid item sm={6}>
                            <WhiteTextTypography variant={"h2"} color="grey.700">
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
                        </Grid>
                        <Grid item sm={6} >
                            <img src={process.env.PUBLIC_URL +'Images/DBTL example to remove.jpg'} height="400px" alt="robot"/>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                bgcolor={"#C7EEFF"}
                p={6}
                className={classes.boxman}
                flexGrow={1}
                minHeight={"20%"}>
                    <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
                        <Grid item sm={6} >
                            <img src={process.env.PUBLIC_URL +'half_team.jpg'} height="400px"  alt="robot"/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant={"h2"}>
                                Who are we?
                            </Typography>
                            <Typography variant={"h8"}>
                                SOAP Lab was born out of a need for more computational
                                tools for synthetic biologists in a year where software
                                tools have become indispensable and software teams in iGEM
                                were for the first time able to win the Grand Prize.

                                Our team is composed of bioengineers, biochemists, computer
                                scientists and physicists studying at Imperial College London.
                                Meet the whole team here!
                            </Typography>
                            <Typography variant={"h8"}>
                                About
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

