import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
    padding: '20px'
  },
  Button: {
    paddingRight: '8px',
    textDecoration: 'none'
  }
});

export default function SpecCardFinal(props) {
    const classes = useStyles();

    //<a href={"app.soaplab.io/"+link.substr(30)} download>
    //{generateFileName(link)}
    //</a>
    function linkGen(link){
        return ( <Typography variant="h5" component="h2">
                    <Grid item xs={2} spacing={3} className={classes.Button}>
                      <a href={"http://app.soaplab.io:8081/"+link.substr(33)} download style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="secondary">
                          {generateFileName(link)}
                        </Button>
                      </a>
                    </Grid>
                 </Typography>
       )
    }

    function generateFileName(link){
      const n = link.search("media/output");
      const k = n + 31
      return link.substr(k)
  }

    function Testnon0(props) {
        const links = props.links;
        console.log('links before length check',links)
        if (links.length === 0) {
          return <div>output links</div>;
        }
        return props.links.map(link => linkGen(link));
      }



    return (
        <Card className={classes.root} variant="outlined">
          <Typography variant="h5" component="h2">
            Output Files
          </Typography>
            <CardContent>
              <Grid container alignItems="stretch" spacing={3}>
                <Testnon0 links={props.links} />
              </Grid>
            </CardContent>
        </Card>
    );
}
