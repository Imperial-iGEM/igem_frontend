import React from 'react'
import {Grid,Typography,  makeStyles } from "@material-ui/core";
import { positions, sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


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

<Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container}>

<Grid item container sm={6} className={classes.boxman} display="flex"   justify="center">
   <Grid item sm={12}>

       <Typography variant={"h2"} color="grey.700">
           Soap
       </Typography>
       <Typography variant={"h2"} color={"grey.700"}>
           Labs
       </Typography>

   </Grid>
    <Grid sm={4}></Grid>

    <Grid item sm={4}>
    <Box
        className={classes.boxman}
        bgcolor = "#FF6F90"
        color="#FFFFFF"
        p={2}>
        Get Started!
    </Box>
    </Grid>

    <Grid sm={4}></Grid>

</Grid>
    <Grid item sm={6}>


    <Box>
                    <img src={process.env.PUBLIC_URL + 'Helper2.svg'} height="60%" width="60%"  />
                </Box>
</Grid>
</Grid>
<Box
bgcolor={"#FF6F90"}
p={6}
className={classes.boxman}>
            <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
              <Grid item sm={6}>

                  <Typography variant={"h2"} color="grey.700">
                    Synthetic Biology made easy
                </Typography>
                <Typography variant={"h6"} color="grey.700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut al
                </Typography>
                  <a>Read More</a>

                  </Grid>
              <Grid item sm={6} >
                  <img src={process.env.PUBLIC_URL + 'logo512.png'} height="70%" width="70%"  />              </Grid>
                </Grid>
</Box>
            <Box
                bgcolor={"#324460"}
                p={6}
                className={classes.boxman}>
                <Grid container  display="flex"  sm ={12} spacing={1}  className={classes.Container} bgcolor={"#FF6F90"} >
                    <Grid item sm={6}>

                        <Typography variant={"h2"} color="grey.700">
                        Why?
                        </Typography>

                    </Grid>
                    <Grid item sm={6} >
                        <Typography variant={"h2"} color="grey.700">
                            Design-Build
                        </Typography>
                        <Typography variant={"h6"} color="grey.700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor                        </Typography>
                        <a>About</a>

                    </Grid>
</Grid>

            </Box>
        </div>


    );
}

