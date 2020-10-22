import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import TemporaryDrawer from './DrawBar';

import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    padding: '10',
    color: 'black'
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const navStyle = {
        color: 'white',
        textDecoration: 'none',
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Link to='/'>
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
              <img src={process.env.PUBLIC_URL +'ourlogo.png'} height="85" alt="logo"/>
            </IconButton>
          </Link>
          <Typography color='black' variant="h6" className={classes.title}>
          </Typography>
          <Hidden xsDown>
            <Link style={navStyle} to='/'>
              <Button color="black">Home</Button>
            </Link>
            <Link style={navStyle} to='/about'>
              <Button color="black">About</Button>
            </Link>
            <Link style={navStyle} to='/designer'>
              <Button color="black">Designer</Button>
            </Link>
            <Link style={navStyle} to='/learn'>
              <Button color="black">Learn</Button>
            </Link>
            <Link style={navStyle} to='/contact'>
              <Button color="black">Contact</Button>
            </Link>
          </Hidden>
          <Hidden smUp>
            <TemporaryDrawer />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}