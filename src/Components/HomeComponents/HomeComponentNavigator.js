import React from 'react'
import { makeStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {
    Link,
    NavLink,
    Route,
    Switch,
} from 'react-router-dom';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },
    help:{
    component: "h1"
}
}));

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "1000px",
    color: "#111111"
};



const body = (
    <div>
        <h2 id="simple-modal-title">Tutorial Page</h2>

    </div>
);


export default function HomeComponentNavigator(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
<div  display={"flex"}>
        <Toolbar position={"relative"}
                 variant = 'dense'>

                <Box
                    color="grey.700"
                    p={1}
                    position="relative"
                    left="74%"
                    zIndex="1"
                    onClick ={handleOpen}
                >

                    <NavLink to="/"    activeStyle={{
                        fontWeight: "bold",
                        color: "#555555",
                        textDecoration: 'none'
                    }}>Designer                    </NavLink>
                </Box>
                <Box
                    color="grey.700"
                    p={1}
                    position="relative"
                    left="76%"
                    zIndex="2"
                >
                    <NavLink to="/About"    activeStyle={{
                        fontWeight: "bold",
                        color: "#555555",
                        textDecoration: 'none'
                    }}> About                    </NavLink>

                </Box>
                <Box
                color="grey.700"
                p={1}
                position="relative"
                left="78%"
                zIndex="3"
            >
                    <NavLink to="/"    activeStyle={{
                        fontWeight: "bold",
                        color: "#555555",
                        textDecoration: 'none'
                    }}> Home                    </NavLink>

                </Box>
                <Box
                    color="grey.700"
                    p={1}
                    position="relative"
                    left="80%"
                    zIndex="4"
                >
                    <NavLink to="/"    activeStyle={{
                        fontWeight: "bold",
                        color: "#555555",
                        textDecoration: 'none'
                    }}
                    >Contact                    </NavLink>

                </Box>
        </Toolbar>

    </div>

        );
    }
