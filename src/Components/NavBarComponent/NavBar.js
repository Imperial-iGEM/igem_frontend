import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:'rgba(255, 165, 0, 0.73)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
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
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography color='black' variant="h6" className={classes.title}>
            Soap Labs
          </Typography>
          <Link style={navStyle} to='/designer'>
            <Button color="black">Designer</Button>
          </Link>
          <Link style={navStyle} to='/about'>
            <Button color="black">About</Button>
          </Link>
          <Link style={navStyle} to='/'>
            <Button color="black">Home</Button>
          </Link>
          <Link style={navStyle} to='/contact'>

          <Button color="black">Contact</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}