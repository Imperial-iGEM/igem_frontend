import React from 'react'
import {Grid,Typography,  makeStyles,withStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

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
        textAlign: 'center',
    },
    Container:{
        height:'100%'
    },
    Title:{
        textAlign: 'left',

    }
}));



const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "1000px",
    color: "#111111"
};


export default function FirstHome(props) {
    const classes = useStyles();



   // <Box display="flex" p={1} bgcolor="background.paper">
//                     <img src={process.env.PUBLIC_URL + 'Helper2.svg'} height="90%" width="90%" />
    return (
        <div  >

<Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} style={{ padding: 20 , paddingLeft:60}}>

<Grid container sm={6} className={classes.Title} display="flex"   justify="center" p={3}>
    <Grid item sm={12}></Grid>
    <Grid item sm={12}></Grid>
    <Grid item sm={12}></Grid>
    <Grid item sm={12}></Grid>
    <Grid item sm={6}>
        <Box >
            <Typography variant={"h4"} className={classes.Title}>Welcome to</Typography>
            <Typography variant={"h2"} className={classes.Title}>
                SoapLab
            </Typography>
        </Box>
    </Grid>
    <Grid item sm={6}></Grid>
    <Grid item sm={4} className={classes.boxman}>
        <Box
        bgcolor = "#FF6F90"
        color="#FFFFFF"
        p={2}
        >
        Get Started!
        </Box>
    </Grid>
    <Grid item sm={8}>    </Grid>


</Grid>

    <Grid item sm={6}>
    <Box>
                    <img src={process.env.PUBLIC_URL + 'Helper2.svg'} height="60%" width="60%"  alt="robot"/>
                </Box>
</Grid>
</Grid>
<Box
bgcolor={"#FF6F90"}
p={6}
className={classes.boxman}>
            <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
              <Grid item sm={6}>

                  <WhiteTextTypography variant={"h2"} color="white">
                    Synthetic Biology made easy
                </WhiteTextTypography>
                <WhiteTextTypography variant={"h6"} color="#FFFFFF">
                    Our Explanation
                </WhiteTextTypography>
                  <WhiteTextTypography variant={"h8"}>Read More</WhiteTextTypography>

                  </Grid>
              <Grid item sm={6} >
                  <img src={process.env.PUBLIC_URL +'Images/DBTL example to remove.jpg'} height="85%" width="85%"  alt="robot"/>              </Grid>
                </Grid>
</Box>
            <Box
                bgcolor={"#324460"}
                p={6}
                className={classes.boxman}>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor                        </WhiteTextTypography>
                        <WhiteTextTypography variant={"h6"}>Resorces: Combinatorial Design/SBOL</WhiteTextTypography>

                        <WhiteTextTypography variant={"h8"}>About</WhiteTextTypography>

</Grid>
                </Grid>

            </Box>




            <Box
                bgcolor={"#859FE1"}
                p={6}
                className={classes.boxman}>
                <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
                    <Grid item sm={6}>

                        <WhiteTextTypography variant={"h2"} color="grey.700">
                            Automation Made Accessible
                        </WhiteTextTypography>

                    </Grid>
                    <Grid item sm={6} >
                        <img src={process.env.PUBLIC_URL +'Images/DBTL example to remove.jpg'} height="85%" width="85%"  alt="robot"/>


                </Grid>
                </Grid>

            </Box>


            <Box
                bgcolor={"#C7EEFF"}
                p={6}
                className={classes.boxman}>
                <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
                    <Grid item sm={6} >
                        <img src={process.env.PUBLIC_URL +'half_team.jpg'} height="85%" width="85%"  alt="robot"/>


                    </Grid>
                    <Grid item sm={6}>

                        <WhiteTextTypography variant={"h2"} color="grey.700">
                            Who are we?
                        </WhiteTextTypography>
                        <WhiteTextTypography variant={"h8"} color="grey.700">
                            About
                        </WhiteTextTypography>

                    </Grid>

                </Grid>

            </Box>
        </div>


    );
}

