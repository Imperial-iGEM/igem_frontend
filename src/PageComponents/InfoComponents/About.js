import React, {useState, useEffect} from 'react'
import {Grid, Card, CardContent, Paper, Typography, AppBar, makeStyles } from "@material-ui/core";
import { positions, sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {Redirect, useLocation} from "react-router-dom";
import MenuDraw from "../../MenuDraw"

export default function About(props)  {
    const [navigate, setNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState({});
    let currentLocation = useLocation();

    let handleTabSelection = function (location, index) {
        console.log(`In GeneDesign Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        setNavigateTo({path: location.path, push: true, state: {referrer: currentLocation}})
        setNavigate(true)
    }
    if (navigate) {
        return (<Redirect
            to={{
                pathname: navigateTo.path,
                push: navigateTo.push,
                state: navigateTo.state
            }}
        />)
    }
    return (
      <div>
          <MenuDraw {...props} handleTabSelection={handleTabSelection}/>
          <Grid container sm={12}  display="flex" wrap={"wrap"} spacing={1} >
              <Grid item sm={4}></Grid>
              <Grid item sm={4} alignContent={"center"}>
                  <img src={process.env.PUBLIC_URL + 'logo512.png'} height="60%" width="60%"  />
              </Grid>
              <Grid item sm={4}></Grid>

              <Grid item sm={6} alignContent={"center"}>
                  <img src={process.env.PUBLIC_URL + 'logo512.png'} height="60%" width="60%"  />

              </Grid>
              <Grid item sm={6} alignContent={"center"}>
                <Typography variant={"h2"} color={"#C4C4C4"}>
                    About
                </Typography>

                <Typography variant={"h6"}  color={"#c4c4c4"}>
                    Synthetic Biology made easy:
                </Typography>
                <Typography variant={"p2"}  color={"#C4C4C4"}>
                    What is SOAP Labs?
                    Soap Labs is an iGEM project that makes automated
                    DNA assembly more accessible.
                </Typography>
                </Grid>
              <Grid item sm={6} alignContent={"center"}>
                  <Typography variant={"h2"} color={"#C4C4C4"}>
                      About
                  </Typography>

                  <Typography variant={"h6"}  color={"#c4c4c4"}>
                      Synthetic Biology made easy:
                  </Typography>
                  <Typography variant={"p2"}  color={"#C4C4C4"}>
                      What is SOAP Labs?
                      Soap Labs is an iGEM project that makes automated
                      DNA assembly more accessible.
                  </Typography>
              </Grid>
              <Grid item sm={6} alignContent={"center"}>
                  <img src={process.env.PUBLIC_URL + 'logo512.png'} height="60%" width="60%"  />

              </Grid>

              <Grid item sm={12} alignContent={"center"}>
                  <img src={process.env.PUBLIC_URL + 'logo512.png'} height="40%" width="100%"  />

              </Grid>
          </Grid>
     </div>

    );
}
