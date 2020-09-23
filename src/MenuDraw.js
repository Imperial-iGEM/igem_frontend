import React, {useState} from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 300;

export default function MenuDrawer(props) {
    const sideBarCategories = props.sideBarCategories;
    const classes = useStyles();
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    function handleDrawerToggle() {
        setDrawerOpen(!drawerOpen)
    }

    function handleTabSelection(location, index) {
        console.log(`In Menu Component; Text: ${location.text}, Path: ${location.path}, Index: ${index}`)
        props.handleTabSelection(location, index)
    }
    const drawer = (
        <div>
            <List>
                  {sideBarCategories.map((location, index) => (
                    <ListItem button key={index} onClick={()=>handleTabSelection(location, index)}>
                        <ListItemText primary={location.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {props.name}
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon/>
                        </IconButton>
                        {drawer}
                    </Drawer>
            </nav>

        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: 80
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
}));
