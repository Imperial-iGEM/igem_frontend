import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SpecCard() {
  const classes = useStyles();
  const navStyle = {
    textDecoration: 'none',
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2">
          Specification Page
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Add details of your run configuration.
        </Typography>
        <Typography variant="body2" component="p">
          Once you have filled out the relevant fields, click the 'Process input' button to get your scripts as download links!
          <br />
          {'For help / support, visit the Learn or the Contact page.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={navStyle} to='/learn'>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
