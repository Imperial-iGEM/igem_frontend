import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import GestureIcon from '@material-ui/icons/Gesture';
import PhoneIcon from '@material-ui/icons/Phone';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ThisWinkAnimation from './DrawImg';
import {Grid } from "@material-ui/core";
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  lottieWinkAnimation: {
    position: 'absolute',
    right: '0',
    bottom:'0'
},
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navStyle = {
    color: 'black',
    textDecoration: 'none',
    };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        <Link style={navStyle} to='/'>
            <ListItem button key={"Home"}>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
            </ListItem>
        </Link>
        <Link style={navStyle} to='/about'>
            <ListItem button key={"About"}>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
            </ListItem>
        </Link>
        <Link style={navStyle} to='/designer'>
            <ListItem button key={"Designer"}>
                <ListItemIcon>
                    <GestureIcon />
                </ListItemIcon>
                <ListItemText primary={"Designer"} />
            </ListItem>
        </Link>
        <Link style={navStyle} to='/learn'>
            <ListItem button key={"Learn"}>
                <ListItemIcon>
                    <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary={"Learn"} />
            </ListItem>
        </Link>
        <Link style={navStyle} to='/contact'>
            <ListItem button key={"Contact"}>
                <ListItemIcon>
                    <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
            </ListItem>
        </Link>
    </List>
    <Grid
    container
    direction="row"
    justify="flex-end"
    alignItems="flex-end"
    >
        <Grid item>
        <div className={classes.lottieWinkAnimation}>
            <ThisWinkAnimation />
        </div>
        </Grid>
    </Grid>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
        <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
        </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}