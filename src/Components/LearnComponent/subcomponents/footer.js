import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    textSection:{
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'10px',
    }
  }));


export default function LearnFooter(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Card variant='outlined'>
                <CardContent>
                <div className={classes.textSection}>
                    <Typography variant={"h2"}>
                        Links
                    </Typography>
                    <Typography variant={"h6"}>
                        The Synthetic Biology Open Language: <a href={"https://sbolstandard.org/"}>https://sbolstandard.org/</a>
                    
                    </Typography>
                    <Typography variant={"h6"}>
                        SynBioHub and SBOL Designer Demo: 
                        <a href={"https://sbolstandard.org/synbiohub-and-sbol-designer-demo/"}>https://sbolstandard.org/synbiohub-and-sbol-designer-demo/</a>
                    </Typography>
                    <Typography variant={"h6"}>
                        SynBioHub: <a href={"https://synbiohub.org/"}>https://synbiohub.org/</a>
                    </Typography>
                    <Typography variant={"h6"}>
                        A design repository for people designing biological constructs 
                    </Typography>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}