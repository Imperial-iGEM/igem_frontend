import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
export default function NavBar (props) {
    console.log(props)
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    {props.name}
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
