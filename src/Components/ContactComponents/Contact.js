import React from 'react'
import {Grid, Typography, Paper } from "@material-ui/core";

export default function Contact(props)  {

    return (
        <div>
            <Paper elevation={3} >

            <Grid container sm={12}  display="flex" wrap={"wrap"} spacing={0.5} >
                    <Grid item sm={1} alignContent={"center"}></Grid>

                    <Grid item sm={11} alignContent={"center"}>
                    <Typography variant={"h3"}>Contact Us:</Typography>

                    <Typography variant={"h6"}>For support or any questions:</Typography>
                    <a href="mailto:imperialigem@gmail.com">Email: imperialigem@gmail.com</a>

                    <Typography variant={"h6"}>To Keep updated with our latest activities:</Typography>

                    <a href={"https://twitter.com/IGem2020"}>  https://twitter.com/IGem2020</a>
                </Grid>
            </Grid>
            </Paper>

        </div>

    );
}
